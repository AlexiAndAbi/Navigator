import React, { useState } from 'react';
import "./TableContents.css";

const TableContents = () => {
  // Initial file system structure
  const [fileSystem] = useState({
    "/": { 
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
  const [currentPath, setCurrentPath] = useState("/");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);

  const getCurrentDir = () => {
    const pathParts = currentPath.split("/").filter(Boolean);
    let current = fileSystem["/"];
    for (const part of pathParts) {
      current = current.children[part];
    }
    return current;
  };

  const handleLs = () => {
    const dir = getCurrentDir();
    if (dir.type === "directory") {
      const contents = Object.keys(dir.children).join("  ");
      return contents || "Directory is empty.";
    }
    return "Not a directory.";
  };

  const handleCd = (path) => {
    const parts = path.split("/").filter(Boolean);
    let current = fileSystem["/"];

    for (const part of parts) {
      if (current.children[part]) {
        current = current.children[part];
      } else {
        return `No such directory: ${path}`;
      }
    }
    setCurrentPath(`/${parts.join("/")}` || "/");
    return `Moved to ${currentPath}`;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const [cmd, ...args] = command.split(" ");
    let result;

    switch (cmd) {
      case "ls":
        result = handleLs();
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

    updateOutput(`>> ${command}`, result);
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
        <span>{`${currentPath} >> `}</span>
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
