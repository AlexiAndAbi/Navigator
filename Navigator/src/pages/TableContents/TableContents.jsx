import React, { useState } from 'react';
import "./TableContents.css";

const TableContents = () => {
  // Initial file system structure
  const [fileSystem] = useState({
    "~": { 
      type: "directory",
      children: {
        "directory1": { 
          type: "directory",
          children: {
            "file3.txt": { type: "file", content: "Hello, Kitten!" },
            "file4.txt": { type: "file", content: "Hello, Kitten!" },
            "directory3": { type: "directory", children: {
              "file5.txt": { type: "file", content: "Hello, Kitten!" },
              "file6.txt": { type: "file", content: "Hello, Kitten!" }
            } }
          }
        },
        "file1.txt": { type: "file", content: "Hello, Daddy!" },
        "file2.txt": { type: "file", content: "Hello, Daddy!" }
      }
    }
  });

  const [prompts] = ["ls", "cd", "ls"]
  const [currentPrompt, setCurrentPrompt] = useState(prompts[0]) 
  const [currentPath, setCurrentPath] = useState("~");
  const [currentDirectory, setCurrentDirectory] = useState("~");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

const getCurrentDir = () => {
  const pathParts = currentPath.split("~").filter(Boolean).map(part => part.replace(/\//g, ""));
  let current = fileSystem["~"];
  
  for (const part of pathParts) {
    current = current.children[part];
  }
  
  setCurrentDirectory(pathParts[pathParts.length - 1])
  return current;
};

const handleLs = (target = null) => {
  let dir = getCurrentDir();

  if (target) {
    // Check if the target exists in the current directory
    const targetItem = dir.children[target];

    if (targetItem) {
      // If it's a file, just return the file name
      if (targetItem.type === "file") {
        return target;
      }
      // If it's a directory, list the contents of that directory
      if (targetItem.type === "directory") {
        const contents = Object.keys(targetItem.children).join("  ");
        return contents || "";
      }
    } else {
      return `ls: ${target}: No such file or directory`;
    }
  }

  // If no target is provided, list the contents of the current directory
  if (dir.type === "directory") {
    const contents = Object.keys(dir.children).join("  ");
    return contents || "Directory is empty.";
  }
  
  return "Not a directory.";
};

  const handleCd = (path) => {
    console.log(path);
    if (path === "~") {
      // If the user wants to go to the root
      setCurrentPath("~");
      return;
    }
  
    const parts = path.split("/").filter(Boolean);
    let current = fileSystem["~"];
    let newPath = "~";
  
    for (const part of parts) {
      if (current.type === "directory" && current.children[part]) {
        current = current.children[part];
        newPath += `/${part}`; // Append to the new path
      } else {
        return `no such file or directory: ${path}`;
      }
    }
  
    setCurrentPath(newPath); // Update to the new path
    console.log(newPath)
    return;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [cmd, ...args] = command.split(" ");
    let result;

    switch (cmd) {
      case "ls":
        if (args.length) {
          result = handleLs(args[0]); // Pass the target name (file or directory)
        } else {
          result = handleLs(); // No target, list contents of the current directory
        }
        break;
      case "cd":
        if (args.length) {
          result = handleCd(args[0]);
        } else {
          result = "Please specify a directory.";
        }
        break;
      default:
        result = `Command not found: ${cmd}`;
    }
  

    updateOutput(`${currentPath} >> ${command}`, result);
    setCommand("");
  };

  const updateOutput = (commandEcho, message) => {
    setOutput((prev) => [...prev, { commandEcho, message }]);
  };

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
        <span>{`${currentPath} >>   `}</span>
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
