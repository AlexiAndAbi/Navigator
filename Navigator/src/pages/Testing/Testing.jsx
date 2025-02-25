import React, { useState, useRef, useEffect } from "react";
import "./Testing.css";

const Testing = () => {
  const [fileSystem, setFileSystem] = useState({
    "~": {
      type: "directory",
      children: {
        directory1: {
          type: "directory",
          children: {
            "file3.txt": { type: "file", content: "Hello, Kitten!" },
            "file4.txt": { type: "file", content: "Hello, Kitten!" },
            directory3: {
              type: "directory",
              children: {
                "file5.txt": { type: "file", content: "Hello, Kitten!" },
                "file6.txt": { type: "file", content: "Hello, Kitten!" },
              },
            },
          },
        },
        "file1.txt": {
          type: "file",
          content:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek, then        ",
        },
        "file2.txt": {
          type: "file",
          content:
            "Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoIcan'trelatetodesperationMygive-a-fucksareonvacationAndIgotthisoneboyandhewon'tstopcallin'Whentheyactthisway,IknowIgot'emToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(oh)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoHolyshitIsitthatsweet?IguesssoI'mworkinglate,'causeI'masingerOh,helookssocutewrapped'roundmyfingerMytwistedhumormakehimlaughsooftenMyhoneybee,comeandgetthispollenToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(stupid)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoThinkin''boutmeeverynight,ohIsitthatsweet?Iguessso(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespresso(yes)Moveitup,down,left,right,ohSwitchituplikeNintendo(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespressoIsitthatsweet?Iguessso,uhThat'sthatmeespressoNowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoIcan'trelatetodesperationMygive-a-fucksareonvacationAndIgotthisoneboyandhewon'tstopcallin'Whentheyactthisway,IknowIgot'emToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(oh)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoHolyshitIsitthatsweet?IguesssoI'mworkinglate,'causeI'masingerOh,helookssocutewrapped'roundmyfingerMytwistedhumormakehimlaughsooftenMyhoneybee,comeandgetthispollenToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(stupid)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoThinkin''boutmeeverynight,ohIsitthatsweet?Iguessso(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespresso(yes)Moveitup,down,left,right,ohSwitchituplikeNintendo(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespressoIsitthatsweet?Iguessso,uhThat'sthatmeespressoNowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoIcan'trelatetodesperationMygive-a-fucksareonvacationAndIgotthisoneboyandhewon'tstopcallin'Whentheyactthisway,IknowIgot'emToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(oh)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoHolyshitIsitthatsweet?IguesssoI'mworkinglate,'causeI'masingerOh,helookssocutewrapped'roundmyfingerMytwistedhumormakehimlaughsooftenMyhoneybee,comeandgetthispollenToobadyourexdon'tdoitforyaWalkedinanddream-came-trueditforyaSoftskinandIperfumeditforya(Yes)IknowIMountainDewitforya(Yes)thatmorningcoffee,breweditforya(Yes)onetouchandIbrand-neweditforya(stupid)Nowhe'sthinkin''boutmeeverynight,ohIsitthatsweet?IguesssoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoMoveitup,down,left,right,ohSwitchituplikeNintendoSayyoucan'tsleep,baby,IknowThat'sthatmeespressoThinkin''boutmeeverynight,ohIsitthatsweet?Iguessso(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespresso(yes)Moveitup,down,left,right,ohSwitchituplikeNintendo(yes)Sayyoucan'tsleep,baby,IknowThat'sthatmeespressoIsitthatsweet?Iguessso,uhThat'sthatmeespresso",
        },
      },
    },
  });

  const [questions, setQuestions] = useState([
    { question: "What command lists the files in a directory?", answer: "ls" },
    { question: "How do you change to another directory?", answer: "cd" },
    { question: "What command creates a new directory?", answer: "mkdir" },
    {
      question: "Which command displays the contents of a file?",
      answer: "cat",
    },
  ]);

  const [currentPath, setCurrentPath] = useState("~");
  const [command, setCommand] = useState("");
  const [output, setOutput] = useState([]);
  const [commandHistory, setCommandHistory] = useState([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [suggestions, setSuggestions] = useState([]);
  const [elapsedTime, setElapsedTime] = useState(0);
  const timerRef = useRef(null);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isQuestionMode, setIsQuestionMode] = useState(false);
  const [quizMode, setQuizMode] = useState(false);

  const handleQuestionMode = () => {
    setIsQuestionMode(true);
    setCurrentQuestionIndex(0);
    updateOutput("", `Question 1: ${questions[0].question}`);
  };

  useEffect(() => {
    if (quizMode) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      clearInterval(timerRef.current); // Stop timer when exiting quiz mode
      setElapsedTime(0); // Reset time when quiz mode restarts
    }

    return () => clearInterval(timerRef.current); // Cleanup on unmount
  }, [quizMode]); // Runs when quizMode changes

  const getCurrentDir = () => {
    const pathParts = currentPath
      .split("/")
      .filter(Boolean)
      .map((part) => part.replace(/\//g, ""));
    let current = fileSystem["~"];

    for (const part of pathParts.slice(1)) {
      // Skip the "~"
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
      return "";
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
      return "";
    }

    const currentDir = getCurrentDir();
    const target = currentDir.children[path];
    if (target && target.type === "directory") {
      setCurrentPath(`${currentPath}/${path}`);
      setSuggestions([]); // Clear suggestions after a successful command
      return "";
    } else if (target && target.type === "file") {
      return `cd: not a directory: ${path}`;
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
      children: {},
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
      content: "",
    };

    return "";
  };

  const handleTab = () => {
    const [cmd, partialName] = command.split(" ");
    if (!["ls", "cd"].includes(cmd) || !partialName) return;

    const currentDir = getCurrentDir();
    const matches = Object.keys(currentDir.children).filter((name) =>
      name.startsWith(partialName)
    );

    if (matches.length === 1) {
      setCommand(`${cmd} ${matches[0]}`);
      setSuggestions([]); // Clear suggestions if one match is autofilled
    } else if (matches.length > 1) {
      setSuggestions(matches); // Show suggestions if multiple matches
    }
  };

  const handleRm = (args) => {
    if (args.length === 0) {
      return "usage: rm [-r | -R] file_name ...";
    }

    // Check if the -r or -R flag is present
    const isRecursive = args[0] === "-r" || args[0] === "-R";
    if (isRecursive) {
      args.shift(); // Remove the -r or -R flag from the arguments
    }

    const target = args[0];
    let dir = getCurrentDir();

    if (dir && dir.children[target]) {
      const targetItem = dir.children[target];

      if (targetItem.type === "file") {
        // Remove the file directly
        delete dir.children[target];
        return ``;
      } else if (targetItem.type === "directory") {
        // If the -r or -R flag is used, recursively remove all children of the directory
        if (isRecursive) {
          const removeDirectoryContents = (dir) => {
            for (let child in dir.children) {
              const childItem = dir.children[child];
              if (childItem.type === "directory") {
                // Recursively remove contents of the directory
                removeDirectoryContents(childItem);
              }
              delete dir.children[child]; // Remove the file or directory
            }
          };

          removeDirectoryContents(targetItem);
          delete dir.children[target]; // Finally, delete the directory itself
          return ``;
        } else {
          // If not recursive, return an error message for non-empty directories
          return `rm: cannot remove '${target}': Is a directory`;
        }
      }
    } else {
      return `rm: ${target}: No such file or directory`;
    }
  };

  const debugFileTree = (dir = fileSystem["~"], indent = "") => {
    let treeString = "";

    // Check if the current directory has children (i.e., files or subdirectories)
    if (dir.type === "directory") {
      treeString += `${indent}${dir.type}: (\n`; // Start directory listing

      // List all items in the current directory (files and subdirectories)
      for (const [name, child] of Object.entries(dir.children)) {
        treeString += `${indent}  ${name}\n`; // Print file/directory name
      }

      treeString += `${indent})`; // End of directory listing
    } else if (dir.type === "file") {
      treeString += `${indent}${dir.type}: (file) - ${dir.content.slice(
        0,
        50
      )}...\n`; // Show first 50 chars of file content
    }

    return treeString;
  };

  const handlePwd = () => {
    if (currentPath.startsWith("~")) {
      return currentPath.replace("~", "/User/username");
    }
    return currentPath;
  };

  const handleCp = (args) => {
    if (args.length < 2) {
      return "usage: cp <source> <destination>";
    }

    let [source, destination] = args;

    // Convert absolute paths to relative paths
    if (source.startsWith("/User/username")) {
      source = "~" + source.substring("/User/username".length);
    }
    if (destination.startsWith("/User/username")) {
      destination = "~" + destination.substring("/User/username".length);
    }

    const sourceParts = source.split("/").filter(Boolean);
    const destParts = destination.split("/").filter(Boolean);

    let sourceDir = fileSystem["~"];
    let destDir = fileSystem["~"];

    // Navigate to the source directory
    for (const part of sourceParts.slice(0, -1)) {
      if (!sourceDir.children[part]) {
        return `cp: ${source}: No such directory`;
      }
      sourceDir = sourceDir.children[part];
    }

    // Navigate to the destination directory
    for (const part of destParts.slice(0, -1)) {
      if (!destDir.children[part]) {
        return `cp: ${destination}: No such directory`;
      }
      destDir = destDir.children[part];
    }

    const sourceFile = sourceParts[sourceParts.length - 1];
    const destinationFile = destParts[destParts.length - 1];

    if (!sourceDir.children[sourceFile]) {
      return `cp: ${sourceFile}: No such file`;
    }

    const fileToCopy = sourceDir.children[sourceFile];

    // If destination is a directory, copy the file into it
    if (
      destDir.children[destinationFile] &&
      destDir.children[destinationFile].type === "directory"
    ) {
      destDir.children[destinationFile].children[sourceFile] = fileToCopy;
      return `${sourceFile} copied to ${destinationFile}`;
    }

    // If destination is a file, overwrite it
    if (
      destDir.children[destinationFile] &&
      destDir.children[destinationFile].type === "file"
    ) {
      destDir.children[destinationFile] = fileToCopy;
      return `${destinationFile} overwritten`;
    }

    return `cp: ${destinationFile}: No such directory or file`;
  };

  const handleCat = (fileName) => {
    const currentDir = getCurrentDir();

    const target = currentDir.children[fileName];
    if (target && target.type === "file") {
      return target.content; // Return file content
    } else if (target && target.type === "directory") {
      return `cat: ${fileName}: Is a directory`;
    } else {
      return `cat: ${fileName}: No such file or directory`;
    }
  };

  const validCommands = [
    "ls",
    "cd",
    "mkdir",
    "touch",
    "clear",
    "cat",
    "y",
    "yes",
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    const userInput = command.trim();
    const [cmd, ...args] = command.split(" ");
    let result;

    if (isQuestionMode) {
      const currentQuestion = questions[currentQuestionIndex];

      let commandOutput = "";
      let isValidCommand = validCommands.includes(cmd);

      if (isValidCommand) {
        // Run the command first
        switch (cmd) {
          case "ls":
            commandOutput = args.length ? handleLs(args[0]) : handleLs();
            break;
          case "cd":
            commandOutput = args.length ? handleCd(args[0]) : "";
            break;
          case "cp":
            result = handleCp(args); // Call the cp handler here
            break;
          case "pwd":
            result = handlePwd();
            break;
          case "rm":
            result = args.length ? handleRm(args) : "rm: missing operand";
            break;
          case "mkdir":
            commandOutput = args.length
              ? handleMkdir(args[0])
              : "usage: mkdir missing directory_name ...";
            break;
          case "touch":
            commandOutput = args.length
              ? handleTouch(args[0])
              : "usage: touch missing file_name ...";
            break;
          case "clear":
            handleClear();
            return;
          case "cat":
            commandOutput = args.length
              ? handleCat(args[0])
              : "usage: cat missing file_name ...";
            break;
          default:
            commandOutput = `command not found: ${cmd}`;
        }
      }

      if (userInput.toLowerCase() === currentQuestion.answer) {
        // ✅ Correct answer → Run the command & move to next question
        if (currentQuestionIndex < questions.length - 1) {
          updateOutput(
            `${currentDirectory} >> ${userInput}\n${commandOutput}`,
            `✅ Correct!\n\nQuestion ${currentQuestionIndex + 2}: ${
              questions[currentQuestionIndex + 1].question
            }`
          );
          setCurrentQuestionIndex((prev) => prev + 1);
        } else {
          // ✅ Last question answered → End quiz
          setQuizMode(false);
          updateOutput(
            `${currentDirectory} >> ${userInput}\n${commandOutput}`,
            "🎉 Quiz completed! Well done!"
          );
          setIsQuestionMode(false);
        }
      } else if (isValidCommand) {
        // 🟡 Valid command but incorrect → Run the command and give feedback
        updateOutput(`${currentDirectory} >> ${userInput}\n${commandOutput}`);
      } else {
        // ❌ Invalid command
        updateOutput(`${currentDirectory} >> ${userInput}`);
      }

      setCommand(""); // Clear input field
      return;
    }

    switch (cmd) {
      case "ls":
        result = args.length ? handleLs(args[0]) : handleLs();
        break;
      case "cd":
        result = args.length ? handleCd(args[0]) : "";
        break;
      case "cp":
        result = handleCp(args); // Call the cp handler here
        break;
      case "mkdir":
        result = args.length
          ? handleMkdir(args[0])
          : "usage: mkdir missing directory_name ...";
        break;
      case "touch":
        result = args.length
          ? handleTouch(args[0])
          : "usage: touch missing file_name ...";
        break;
      case "pwd":
        result = handlePwd();
        break;
      case "rm":
        result = args.length ? handleRm(args) : "rm: missing operand";
        break;
      case "clear":
        handleClear();
        return;
      case "cat":
        result = args.length
          ? handleCat(args[0])
          : "usage: cat missing file_name ...";
        break;
      case "y":
        setCommand(""); // Clear input field
        setQuizMode(true);
        handleQuestionMode();
        return;
      case "yes":
        setCommand(""); // Clear input field
        setQuizMode(true);
        handleQuestionMode();
        return;
      default:
        result = `command not found: ${cmd}`;
    }

    updateOutput(`${currentDirectory} >> ${command}`, result);
    setCommandHistory((prev) => [...prev.slice(-99), command]);
    setHistoryIndex(-1);
    setCommand("");
    setSuggestions([]); // Clear suggestions after command submission
  };

  const handleClear = () => {
    setOutput([]);
    setCommand("");
  };

  const updateOutput = (commandEcho, message) => {
    setOutput((prev) => [...prev, { commandEcho, message }]);
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

  const currentDirectory = currentPath.split("/").filter(Boolean).pop() || "~";

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  /*const handleNavigation2 = () => {
    navigate("/Unit1-Level4-page4");
  };*/

  return (
    <div className="gradient_background">
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      <div className="shell-container2">
        {/* Timer and game description */}
        <div className="header">
          <p className="game-description">
            Welcome to the final challange of Navigator! Your goal is to use all
            of the Unix commands you've learned and complete each task using the
            correct command(s). If you enter a valid command but it's not the
            correct one, it will still execute, but you must find the right
            answer to move forward. Good luck!
          </p>
          <div className="timer">Elapsed Time: {elapsedTime}s</div>
          <p className="game-description">Are you ready to start?</p>
        </div>

        {/* Command output */}
        <div className="output">
          {output.map((entry, index) => (
            <div key={index} className="command-output">
              <div>{entry.commandEcho}</div>
              <div>{entry.message}</div>
            </div>
          ))}
        </div>

        {/* Input field */}
        <form onSubmit={handleSubmit}>
          <span>
            {`${currentDirectory} >> `}
            <input
              type="text"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </span>

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

export default Testing;
