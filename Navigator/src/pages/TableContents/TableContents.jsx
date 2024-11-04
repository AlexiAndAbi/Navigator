import React, { useState } from 'react';
import "./TableContents.css";

const TableContents = () => {
  const [fileSystem] = useState({
    "~": { 
      type: "directory",
      children: {
        "directory1": { 
          type: "directory",
          children: {
            "file3.txt": { type: "file", content: "Hello, Kitten!" },
            "file4.txt": { type: "file", content: "Hello, Kitten!" },
            "directory3": { 
              type: "directory", 
              children: {
                "file5.txt": { type: "file", content: "Hello, Kitten!" },
                "file6.txt": { type: "file", content: "Hello, Kitten!" }
              } 
            }
          }
        },
        "file1.txt": { type: "file", content: "Hello, Daddy!" },
        "file2.txt": { type: "file", content: "Hello, Daddy!" }
      }
    }
  });

  const [currentPath, setCurrentPath] = useState("~");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const getCurrentDir = () => {
    const pathParts = currentPath.split("/").filter(Boolean).map(part => part.replace(/\//g, ""));
    let current = fileSystem["~"];
  
    for (const part of pathParts.slice(1)) { // Skip the "~"
      current = current.children[part];
    }
    return current;
  };

  const handleLs = (target = null) => {
    let dir = getCurrentDir();

    if (target) {
      const targetItem = dir.children[target];

      if (targetItem) {
        if (targetItem.type === "file") {
          return target;
        }
        if (targetItem.type === "directory") {
          const contents = Object.keys(targetItem.children).join("  ");
          return contents || "";
        }
      } else {
        return `ls: ${target}: No such file or directory`;
      }
    }

    if (dir.type === "directory") {
      const contents = Object.keys(dir.children).join("  ");
      return contents || "Directory is empty.";
    }
    
    return "something is terribly wrong.";
  };

  const handleCd = (path) => {
    if (path === "~") {
      setCurrentPath("~");
      return;
    }
  
    const parts = path.split("/").filter(Boolean);
    let current = fileSystem["~"];
    let newPath = "~";
  
    for (const part of parts) {
      if (current.type === "directory" && current.children[part]) {
        current = current.children[part];
        newPath += `/${part}`;
      } else {
        return `cd: no such file or directory: ${path}`;
      }
    }
  
    setCurrentPath(newPath);
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [cmd, ...args] = command.split(" ");
    let result;

    switch (cmd) {
      case "ls":
        result = args.length ? handleLs(args[0]) : handleLs();
        break;
      case "cd":
        result = args.length ? handleCd(args[0]) : "Please specify a directory.";
        break;
      default:
        result = `command not found: ${cmd}`;
    }
  
    updateOutput(`${currentDirectory} >> ${command}`, result);
    setCommand("");
  };

  const updateOutput = (commandEcho, message) => {
    setOutput((prev) => [...prev, { commandEcho, message }]);
  };

  // Extract only the current directory name for display
  const currentDirectory = currentPath.split("/").filter(Boolean).pop() || "~";

  return (
    <div className='gradient_background'>
      <div className="shell-container">
        <div className="output">
          {output.map((entry, index) => (
            <div key={index} className="command-output">
              <div>{entry.commandEcho}</div>
              <div>{entry.message}</div>
            </div>
          ))}
        </div>
        <form onSubmit={handleSubmit}>
          <span>{`${currentDirectory} >> `}</span>
          <input
            type="text"
            value={command}
            onChange={(e) => setCommand(e.target.value)}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default TableContents;
