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

const handleLs = (fileName) => {
  const dir = getCurrentDir();

  console.log(fileName);
  if (fileName) {
    // Check if the file exists in the current directory
    if (dir.children[fileName]) {
      return fileName;
    } else {
      return "No such file or directory";
    }
  }

  // If no specific file is requested, list all contents
  const contents = Object.keys(dir.children).join("  ");
  return contents || "Directory is empty.";
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
          result = handleLs(args[0]); // Pass the file name if provided
        } else {
          result = handleLs(); // No file name, list all contents
        }
        break;
      case "cd":
        if (args.length) {
          result = handleCd(args[0]);
        } else {
          result = "";
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
