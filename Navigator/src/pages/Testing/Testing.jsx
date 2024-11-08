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
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);

  const getCurrentDir = () => {
    const pathParts = currentPath.split("/").filter(Boolean).map(part => part.replace(/\//g, ""));
    let current = fileSystem["~"];
  
    for (const part of pathParts.slice(1)) {
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
    if (path === "~") {
      setCurrentPath("~");
      return;
    }
  
    if (path === "..") {
      const parts = currentPath.split("/").filter(Boolean);
      if (parts.length > 1) {
        const newPath = parts.slice(0, parts.length - 1).join("/");
        setCurrentPath(`/${newPath}`);
      } else {
        setCurrentPath("~");
      }
      return;
    }
  
    let found = 0;
    const parts = currentPath.split("/").filter(Boolean);
    const partswithoutfirst = parts.slice(1);
    let current = fileSystem["~"];
    let newPath = "~";
  
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
  
    for (const part of partswithoutfirst) {
      if (current.type === "directory" && current.children[part]) {
        current = current.children[part];
        newPath += `/${part}`;
      }
    }
    
    if (current.type === "directory" && current.children[path]) {
      current = current.children[path];
      found = 1;
      newPath += `/${path}`;
      setCurrentPath(newPath);
      return;
    }
  
    if (found === 0) {
      return `cd: no such file or directory: ${path}`;
    }
  
    setCurrentPath(newPath);
    return;
  };

  const handleMkdir = (dirName) => {
    if (!dirName) return "usage: mkdir missing directory_name ...";
  
    const currentDir = getCurrentDir();
    
    if (currentDir.children[dirName]) {
      return `mkdir: ${dirName}: File exists`;
    }
  
    currentDir.children[dirName] = {
      type: "directory",
      children: {}
    };
  
    return ""; 
  };

  const handleTouch = (fileName) => {
    if (!fileName) return "usage: touch missing file_name ...";
  
    const currentDir = getCurrentDir();
  
    if (currentDir.children[fileName]) {
      return `touch: ${fileName}: Timestamp updated`;
    }
  
    currentDir.children[fileName] = {
      type: "file",
      content: ""
    };
  
    return ""; 
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
        result = "";
        handleClear();
        break;
      default:
        result = `command not found: ${cmd}`;
    }
  
    if (cmd !== "clear") {
      updateOutput(`${currentDirectory} >> ${command}`, result);
    }

    setCommandHistory((prevHistory) => {
      const newHistory = [...prevHistory.slice(-99), command]; 
      setHistoryIndex(-1);
      return newHistory;
    });

    setCommand("");
  };

  const handleKeyDown = (e) => {
    if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      handleClear();
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      if (historyIndex < commandHistory.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      }
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setCommand(commandHistory[commandHistory.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setCommand("");
      }
    }
  };

  const handleClear = () => {
    setOutput([]);
    setCommand("");
  };

  const updateOutput = (commandEcho, message) => {
    setOutput((prev) => [...prev, { commandEcho, message }]);
  };

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
            onKeyDown={handleKeyDown}
            autoFocus
          />
        </form>
      </div>
    </div>
  );
};

export default Testing;
