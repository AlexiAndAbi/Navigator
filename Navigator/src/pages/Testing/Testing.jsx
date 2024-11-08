import React, { useState } from 'react';
import "./Testing.css";

const Testing = () => {
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
      return contents || "";
    }
    
    return "something is terribly wrong.";
  };

  const handleCd = (path) => {
    console.log("current path =", currentPath);
  
    // Handle going to the root directory
    if (path === "~") {
      setCurrentPath("~");
      return;
    }
  
    // Handle moving to the parent directory
    if (path === "..") {
      const parts = currentPath.split("/").filter(Boolean);
      if (parts.length > 1) {
        // Remove the last part to go to the parent
        const newPath = parts.slice(0, parts.length - 1).join("/");
        setCurrentPath(`/${newPath}`);
      } else {
        // If already at the root, do not change the path
        setCurrentPath("~");
      }
      return;
    }
  
    let found = 0;
    const parts = currentPath.split("/").filter(Boolean);
    const partswithoutfirst = parts.slice(1); // Exclude root for navigation
    console.log("partswithoutfirst = ", partswithoutfirst);
    let current = fileSystem["~"];
    let newPath = "~";
  
    // If in root directory
    if (partswithoutfirst.length === 0) {
      if (current.type === "directory" && current.children[path]) {
        current = current.children[path];
        found = 1;
        newPath += `/${path}`;
        setCurrentPath(newPath);
        return;
      } else {
        return `cd: no such file or directory: ${path}`;
      }
    }
  
    // Navigate through the current path
    for (const part of partswithoutfirst) {
      console.log("part: ", part);
      if (current.type === "directory" && current.children[part]) {
        current = current.children[part];
        newPath += `/${part}`;
      }
    }
    
    // Navigate to the specified directory
    if (current.type === "directory" && current.children[path]) {
      current = current.children[path];
      found = 1;
      newPath += `/${path}`;
      setCurrentPath(newPath);
      return;
    }
  
    // If no valid directory found
    if (found === 0) {
      return `cd: no such file or directory: ${path}`;
    }
  
    setCurrentPath(newPath);
    return;
  };

  const handleMkdir = (dirName) => {
    console.log("directory name = ", dirName)
    if (!dirName) return "usage: mkdir missing directory_name ...";
  
    const currentDir = getCurrentDir();
    
    // Check if the directory already exists
    if (currentDir.children[dirName]) {
      return `mkdir: ${dirName}: File exists`;
    }
  
    // Create a new directory
    currentDir.children[dirName] = {
      type: "directory",
      children: {}
    };
  
    return ""; // No error message to return
  };

  const handleTouch = (fileName) => {
    console.log("file name = ", fileName)
    if (!fileName) return "usage: touch missing file_name ...";
  
    const currentDir = getCurrentDir();
  
    // Check if the file or directory already exists
    if (currentDir.children[fileName]) {
      return `touch: ${fileName}: Timestamp updated`;
    }
  
    // Create a new empty file
    currentDir.children[fileName] = {
      type: "file",
      content: ""
    };
  
    return ""; // No error message to return
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
        result = args.length ? handleCd(args[0]) : "";
        break;
      case "mkdir":
        result = args.length ? handleMkdir(args[0]) : "usage: mkdir missing directory_name ...";
        break;
      case "touch":
        result = args.length ? handleTouch(args[0]) : "usage: touch missing file_name ...";
        break;
      case "clear":
        handleClear();
        return; // Exit the function early to avoid adding an output for clear
      default:
        result = `command not found: ${cmd}`;
    }
  
    updateOutput(`${currentDirectory} >> ${command}`, result);
    setCommand("");
  };
  
  
  // Function to clear the output and the input
  const handleClear = () => {
    setOutput([]);      // Clear the output
    setCommand("");     // Clear the command input
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
        {/* Display the current question */}
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

export default Testing;
