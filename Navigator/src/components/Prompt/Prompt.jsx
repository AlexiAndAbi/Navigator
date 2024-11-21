import React, { useState } from 'react';
import "./Prompt.css";

const Prompts = () => {
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
  const [suggestions, setSuggestions] = useState([]);
  const [questionIndex, setQuestionIndex] = useState(0); // New state for question index

  // Array of questions
  const questions = [
    "Can you display the current directory contents?",
    "Can you move into the child directory?",
    "Can you move into the child directory again?",
    "Can you move up to the home directory?"
  ];

  // Array of answers
  const expectedAnswers = [
    "ls",           // For "display current directory contents"
    "cd directory1", // For "move into the child directory"
    "cd directory3", // For "move into the child directory again"
    "cd ~"         // For "move up to the home directory"
  ];

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
    if (path === "~") {
      setCurrentPath("~");
      setSuggestions([]);
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
      setSuggestions([]);
      return;
    }

    const currentDir = getCurrentDir();
    const target = currentDir.children[path];
    if (target && target.type === "directory") {
      setCurrentPath(`${currentPath}/${path}`);
      setSuggestions([]); // Clear suggestions after a successful command
    } else if (target && target.type === "file"){
      return `cd: not a directory: ${path}`
    } else {
      return `cd: no such file or directory: ${path}`;
    }
  };
  
  const handleMkdir = (dirName) => {
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

  const handleTab = () => {
    const [cmd, partialName] = command.split(" ");
    if (!["ls", "cd"].includes(cmd) || !partialName) return;

    const currentDir = getCurrentDir();
    const matches = Object.keys(currentDir.children).filter(name => name.startsWith(partialName));

    if (matches.length === 1) {
      setCommand(`${cmd} ${matches[0]}`);
      setSuggestions([]); // Clear suggestions if one match is autofilled
    } else if (matches.length > 1) {
      setSuggestions(matches); // Show suggestions if multiple matches
    }
  };

// Add state for whether the question has been displayed
const [isQuestionDisplayed, setIsQuestionDisplayed] = useState(false);

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
      return;
    default:
      result = `command not found: ${cmd}`;
  }

  // Display the current question only once
  if (!isQuestionDisplayed) {
    updateOutput(questions[questionIndex], "", true); // Mark as a question
    setIsQuestionDisplayed(true);
  }

  // Check if the answer is correct for the current question
  const expectedAnswer = expectedAnswers[questionIndex];
  if (command.trim() === expectedAnswer) {
    // If correct, show confirmation and proceed to the next question
    setQuestionIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex < questions.length ? newIndex : 0; // Loop back to the start if needed
    });
    setIsQuestionDisplayed(false); // Reset for the next question
  } else {
    // If incorrect, do not proceed to the next question
  }

  // Always update the output for the executed command
  updateOutput(`${currentDirectory} >> ${command}`, result);
  setCommandHistory((prev) => [...prev.slice(-99), command]);
  setHistoryIndex(-1);
  setCommand("");
  setSuggestions([]); // Clear suggestions after command submission
};

  
  // Function to clear the output and the input
  const handleClear = () => {
    setOutput([]);
    setCommand("");
  };

  const updateOutput = (commandEcho, message, isQuestion = false) => {
    setOutput((prev) => [
      ...prev,
      {
        commandEcho,
        message,
        isQuestion, // Add a flag to identify questions
      },
    ]);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTab();
    } else if (e.key === "ArrowUp") {
      // Check if there's history to navigate
      if (commandHistory.length > 0) {
        if (historyIndex === -1) {
          // Start at the last command in history if not already navigating
          setHistoryIndex(commandHistory.length - 1);
          setCommand(commandHistory[commandHistory.length - 1]);
        } else if (historyIndex > 0) {
          // Move up in history if possible
          setHistoryIndex(historyIndex - 1);
          setCommand(commandHistory[historyIndex - 1]);
        }
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex >= 0 && historyIndex < commandHistory.length - 1) {
        // Move down in history if not at the end
        setHistoryIndex(historyIndex + 1);
        setCommand(commandHistory[historyIndex + 1]);
      } else if (historyIndex === commandHistory.length - 1) {
        // If at the last history command, clear the command box
        setHistoryIndex(-1);
        setCommand("");
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      handleClear();
    }
  };

  // Extract only the current directory name for display
  const currentDirectory = currentPath.split("/").filter(Boolean).pop() || "~";

  return (
    <div className="gradient_background">
      <div className="shell-container">
      <div className="output">
        {output.map((entry, index) => (
          <div
            key={index}
            className={`command-output ${entry.isQuestion ? "question-output" : ""}`}
          >
            {entry.isQuestion ? (
              // Display question with question styles (reuse the same styles)
              <div className="question">{entry.commandEcho}</div>
            ) : (
              <>
                {/* Indented command line with reused styles */}
                <div className="command-line">
                  <span>{entry.commandEcho}</span>
                </div>
                {/* Display command result (reuse input styles for result indentation) */}
                <div className="command-output result">{entry.message}</div>
              </>
            )}
          </div>
        ))}
      </div>

        <form onSubmit={handleSubmit}>
          {/* Question section */}
          <div className="question-container">
            {!isQuestionDisplayed && (
              <div className="question">{questions[questionIndex]}</div>
            )}
            <div className="command-line">
              <span className="directory-prompt">{`${currentDirectory} >>`}</span>
              <input
                type="text"
                value={command}
                onChange={(e) => setCommand(e.target.value)}
                onKeyDown={handleKeyDown}
                autoFocus
              />
            </div>
          </div>

          {/* Display autocomplete suggestions, if any */}
          {suggestions.length > 0 && (
            <div className="command-output suggestions">
              {suggestions.join("  ")}
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

export default Prompts;