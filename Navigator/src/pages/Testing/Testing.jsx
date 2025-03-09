import React, { useState, useRef, useEffect } from "react";
import "./Testing.css";
import { useNavigate } from "react-router-dom";

const Testing = () => {
  const navigate = useNavigate();
  const [fileSystem, setFileSystem] = useState({
    "~": {
      type: "directory",
      children: {
        information: {
          type: "directory",
          children: {
            "summer.txt": { type: "file", content: "Hello, Kitten!" },
            "fall.txt": { type: "file", content: "Hello, Kitten!" },
            Navigator: {
              type: "directory",
              children: {
                "intro.txt": { type: "file", content: "Hello, Kitten!" },
                "level1.txt": { type: "file", content: "Hello, Kitten!" },
                "level2.txt": { type: "file", content: "Hello, Kitten!" },
                "level3.txt": { type: "file", content: "Hello, Kitten!" },
                "level4.txt": { type: "file", content: "Hello, Kitten!" },
              },
            },
          },
        },
        "hello.txt": {
          type: "file",
          content:
            "I love saying hello because it has delivered the most wonderful people on planet earth\nto me. I'm outgoing, and extroverted, so it makes sense that a hello is natural. That no\nstranger scares me... because they are just a friend you haven't met yet. And yes, I'm\nrealistic, not everyone is that way. But every class I walk in to here, I try and say\nhello. To a few people. To those who smile. To those who I can tell are putting\ntheir heart into this... irreguarless of whether they are really in it or not.\nAnd to those out there just learning, hello! It is lovely to meet you. There is so\nmuch more to go... but you have done the hardest part... getting started.",
        },
        "goodbye.txt": {
          type: "file",
          content:
            "When you've been in this major so long, it starts to feel more\nlike home. More so because you start to know people. You start to know\nfaces and names and such. And then you find your people.\nAnd they make all the coding so much better because they sit there with you.\nIn the dark, and in the daytime, and they are their to share in your memory leaks\nand also in your greatest successes. To those who have sat their with me...\nthis game is for you. You have made my time here so precious.\nAnd this isn't goodbye. I will think of you often, in the dark, and in the daytime,\nwhen the going gets tough, and when things are wonderful.",
        },
      },
    },
  });

  const [questions, setQuestions] = useState([
    { question: "Create a new directory", answer: "" },
    {
      question: "Create three empty files in the directory you just made",
      answer: "",
    },
    {
      question:
        "Move one of these files into its parent directory using an absolute path",
      answer: "",
    },
    {
      question: "Move to the home directory",
      answer: "",
    },
    {
      question: "Clear the terminal",
      answer: "",
    },
    {
      question: "Display the contents of any file with line numbers shown",
      answer: "",
    },
    {
      question:
        "Copy both of the text files in the home directory into the directory you created earlier using a relative path",
      answer: "",
    },
    {
      question:
        "Move the directory Navigator to the home directory using an absolute path",
      answer: "",
    },
  ]);

  const [currentPath, setCurrentPath] = useState("~/information");
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
  const [createdDirectory, setCreatedDirectory] = useState(null);
  const [f1, setF1] = useState(null);
  const [f2, setF2] = useState(null);
  const [f3, setF3] = useState(null);
  const [fileCounter, setFileCounter] = useState(0); // Stores the number of created files
  const [gameOver, setGameOver] = useState(false); // State to track game completion
  const [score, setScore] = useState(0);

  const updateScore = (points) => {
    setScore((prevScore) => prevScore + points);
  };

  const handleQuestionMode = () => {
    setIsQuestionMode(true);
    setCurrentQuestionIndex(0);
    updateOutput("", `Question 1: ${questions[0].question}`);
  };

  useEffect(() => {
    // Start the timer when quizMode is true
    if (quizMode && !gameOver) {
      timerRef.current = setInterval(() => {
        setElapsedTime((prevTime) => prevTime + 1);
      }, 1000);
    } else {
      // Stop the timer when the game ends or when exiting quiz mode
      clearInterval(timerRef.current);

      if (gameOver) {
        console.log("Game Over. Timer stopped.");
      }

      setElapsedTime(0); // Reset time when quiz mode restarts or game is over
    }

    // Cleanup on unmount
    return () => clearInterval(timerRef.current);
  }, [quizMode, gameOver]); // Dependency array includes both quizMode and gameOver

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

  const handleTouch = (...fileNames) => {
    const currentDir = getCurrentDir();
    let message = "";

    fileNames.forEach((fileName) => {
      if (currentDir.children[fileName]) {
        message += `touch: ${fileName}: Timestamp updated\n`;
      } else {
        currentDir.children[fileName] = {
          type: "file",
          content: "",
        };
      }
    });

    return message.trim();
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

  const handleMv = (sourcePath, destPath) => {
    const homePath = "~/User/username"; // Define home directory path

    // Normalize the source and destination paths
    if (sourcePath.startsWith(homePath)) {
      sourcePath = "~" + sourcePath.slice(homePath.length);
    }
    if (destPath.startsWith(homePath)) {
      destPath = "~" + destPath.slice(homePath.length);
    }

    // Ensure absolute paths
    if (!sourcePath.startsWith("~") || !destPath.startsWith("~")) {
      return "mv: only absolute paths are allowed";
    }

    const getItemAtPath = (path) => {
      const parts = path.split("/").filter(Boolean);
      let current = fileSystem["~"];
      let parent = null;
      let key = null;

      for (const part of parts.slice(1)) {
        if (!current.children[part]) return null;
        parent = current;
        key = part;
        current = current.children[part];
      }
      return { parent, key, item: current };
    };

    // Get source file/directory
    const source = getItemAtPath(sourcePath);
    if (!source || !source.item) {
      return `mv: cannot move '${sourcePath}': No such file or directory`;
    }

    // Get destination
    let dest = getItemAtPath(destPath);

    if (dest && dest.item && dest.item.type === "directory") {
      // If the destination is a directory, move inside it
      dest.item.children[source.key] = source.item;
    } else {
      // Otherwise, move/rename file or directory
      const destParts = destPath.split("/");
      const destFileName = destParts.pop();
      const destDirPath = destParts.join("/");
      const destDir = getItemAtPath(destDirPath);

      if (!destDir || !destDir.item || destDir.item.type !== "directory") {
        return `mv: cannot move '${sourcePath}' to '${destPath}': No such directory`;
      }

      destDir.item.children[destFileName] = source.item;
    }

    // Remove the original source after moving
    delete source.parent.children[source.key];

    setFileSystem({ ...fileSystem }); // Update state
    return "";
  };

  const handleCp = (sourcePaths, destPath) => {
    // Ensure sourcePaths is an array.
    if (!Array.isArray(sourcePaths)) {
      sourcePaths = [sourcePaths];
    }

    // Normalize destination path.
    const normDestPath = resolvePath(destPath);
    const destInfo = getItemAtPath(normDestPath);

    // Check that destination exists and is a directory.
    if (!destInfo || !destInfo.item || destInfo.item.type !== "directory") {
      return `cp: cannot copy to '${normDestPath}': Not a directory or does not exist`;
    }

    // Process each source file.
    for (const src of sourcePaths) {
      const normSrc = resolvePath(src);
      const srcInfo = getItemAtPath(normSrc);

      if (!srcInfo || !srcInfo.item || srcInfo.item.type !== "file") {
        return `cp: cannot copy '${src}': No such file or not a file`;
      }

      // Copy the file into the destination directory using its existing file name.
      destInfo.item.children[srcInfo.key] = {
        type: "file",
        content: srcInfo.item.content,
      };
    }

    // Update state.
    setFileSystem({ ...fileSystem });
    return "";
  };

  const resolvePath = (path) => {
    console.log("Path: " + path);
    if (path.startsWith("~")) return path; // Already absolute

    if (path.startsWith("/User/username")) {
      let path2 = "";
      path2 = "~" + path.slice("/User/username".length);
      return path2;
    }

    const homePath = "/User/username"; // Define home directory path
    let basePath = currentPath.startsWith("~")
      ? currentPath.replace("~", homePath)
      : currentPath;

    if (basePath.startsWith("/User/username")) {
      basePath = "~" + basePath.slice("/User/username".length);
    }

    console.log("base path part 1: " + basePath);

    // Normalize the path to avoid multiple slashes or invalid path formation
    let parts = path.split("/").filter(Boolean);
    let currentParts = basePath.split("/").filter(Boolean);
    console.log("BasePath: " + basePath);

    for (const part of parts) {
      if (part === ".") continue; // Stay in the current directory
      if (part === "..") {
        currentParts.pop(); // Move up one directory
      } else {
        currentParts.push(part); // Move into the directory/file
      }
    }

    let resolvedPath = `~/${currentParts.slice(1).join("/")}`; // Convert back to home-relative
    console.log("resolved path: " + resolvedPath);
    return resolvedPath.endsWith("/")
      ? resolvedPath.slice(0, -1)
      : resolvedPath; // Remove trailing slash
  };

  // Helper: given an absolute path (starting with "~"), traverse the fileSystem.
  const getItemAtPath = (path) => {
    // Split the path into parts and remove the "~" if present.
    let parts = path.split("/").filter(Boolean);
    if (parts[0] === "~") {
      parts = parts.slice(1);
    }
    let current = fileSystem["~"];
    let parent = null;
    let key = null;
    for (let part of parts) {
      if (!current.children || !current.children[part]) {
        return null;
      }
      parent = current;
      key = part;
      current = current.children[part];
    }
    return { parent, key, item: current };
  };

  const handlePwd = () => {
    if (currentPath.startsWith("~")) {
      return currentPath.replace("~", "/User/username");
    }
    if (currentPath.startsWith("/~")) {
      return currentPath.replace("/~", "/User/username");
    }
    return currentPath;
  };

  const handleCat = (args) => {
    const currentDir = getCurrentDir();

    // Check if the `-n` option is present
    const hasLineNumbers = args.includes("-n");

    // Find the file argument (ignore `-n`)
    const fileName = args.filter((arg) => arg !== "-n")[0];

    if (!fileName) {
      return "cat: missing file operand";
    }

    const target = currentDir.children[fileName];

    if (target && target.type === "file") {
      const fileContent = target.content;

      // If `-n` option is used, add line numbers
      if (hasLineNumbers) {
        return fileContent
          .split("\n")
          .map((line, index) => `${index + 1} ${line}`)
          .join("\n");
      }

      return fileContent; // Return file content as is
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
    "rm",
    "cp",
    "pwd",
    "y",
    "mv",
    "yes",
  ];

  const [cdUpCount, setCdUpCount] = useState(0);
  const [cpCount, setcpCount] = useState(0);

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
            const targetPath = args.length
              ? resolvePath(args[0])
              : currentDirectory;
            commandOutput = args.length ? handleCd(args[0]) : "";
            if (currentQuestion.question === "Move to the home directory") {
              if (args[0] === "~") {
                // ✅ Correct if they use `cd ~`
                setCdUpCount(0); // Reset counter
                if (currentQuestionIndex < questions.length - 1) {
                  updateOutput(
                    "",
                    `+20pts\n\nQuestion ${currentQuestionIndex + 2}: ${
                      questions[currentQuestionIndex + 1].question
                    }`
                  );
                  updateScore(20);
                  setCurrentQuestionIndex((prev) => prev + 1);
                }
                setCommand("");
                return;
              } else if (args[0] === "..") {
                // Increment counter if they use `cd ..`
                setCdUpCount((prev) => prev + 1);
                // Check if they have moved up twice
                if (cdUpCount + 1 >= 2) {
                  setCdUpCount(0); // Reset counter
                  if (currentQuestionIndex < questions.length - 1) {
                    updateOutput(
                      "",
                      `+10pts (cd ~ +20pts)\n\nQuestion ${
                        currentQuestionIndex + 2
                      }: ${questions[currentQuestionIndex + 1].question}`
                    );
                    updateScore(10);
                    setCurrentQuestionIndex((prev) => prev + 1);
                  }
                  setCommand("");
                  return;
                }
              }
            }
            break;
          case "pwd":
            commandOutput = handlePwd();
            break;
          case "cp":
            if (args.length < 2) {
              commandOutput = "cp: missing file operand";
            } else {
              const sourcePaths = args.slice(0, -1).map(resolvePath); // All args except last are source files
              const destPath = resolvePath(args[args.length - 1]); // Last arg is destination
              commandOutput = handleCp(sourcePaths, destPath);
              if (
                currentQuestion.question ===
                "Copy both of the text files in the home directory into the directory you created earlier using a relative path"
              ) {
                if (sourcePaths.length === 2 && args[args.length - 1] == `./information/${createdDirectory}`) {
                  // ✅ Correct if they copy two files
                  setcpCount(0); // Reset counter
                  if (currentQuestionIndex < questions.length - 1) {
                    updateOutput(
                      "",
                      `+150pts \n\nQuestion ${currentQuestionIndex + 2}: ${
                        questions[currentQuestionIndex + 1].question
                      }`
                    );
                    updateScore(150);
                    setCurrentQuestionIndex((prev) => prev + 1);
                  }
                  setCommand("");
                  return;
                } else if (sourcePaths.length === 1 && args[args.length - 1] == `./information/${createdDirectory}`) {
                  // Increment counter if they copy one file
                  setcpCount((prev) => prev + 1);

                  // Check if they have moved up twice
                  if (cpCount + 1 >= 2) {
                    setcpCount(0); // Reset counter
                    if (currentQuestionIndex < questions.length - 1) {
                      updateOutput(
                        "",
                        `+100pts (cp ___ ___ ... +150pts)\n\nQuestion ${currentQuestionIndex + 2}: ${
                          questions[currentQuestionIndex + 1].question
                        }`
                      );
                      setCurrentQuestionIndex((prev) => prev + 1);
                    }
                    updateScore(100);
                    setCommand("");
                    return;
                  }
                }
              }
            }
            break;

          case "mv":
            if (args.length < 2) {
              commandOutput = "mv: missing file operand";
            } else {
              let recursive = false;
              let sourceIndex = 0;

              // Check if -r is the first argument
              if (args[0] === "-r") {
                recursive = true;
                sourceIndex = 1;
              }

              if (args.length - sourceIndex < 2) {
                commandOutput = "mv: missing file operand after '-r'";
              } else {
                const sourcePath = resolvePath(args[sourceIndex]); // Convert to absolute path
                const destPath = resolvePath(args[sourceIndex + 1]); // Convert to absolute path
                commandOutput = handleMv(sourcePath, destPath, recursive);
              }
              if (
                currentQuestion.question ===
                  "Move one of these files into its parent directory using an absolute path" &&
                !commandOutput &&
                args[1] == "/User/username/information"
              ) {
                // ✅ Directory successfully created → Mark as correct and move to next question
                if (currentQuestionIndex < questions.length - 1) {
                  updateOutput(
                    `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                    `+100pts \n\nQuestion ${currentQuestionIndex + 2}: ${
                      questions[currentQuestionIndex + 1].question
                    }`
                  );
                  updateScore(100);
                  setCurrentQuestionIndex((prev) => prev + 1);
                }
                setCommand(""); // Clear input field
                return;
              }
              if (
                currentQuestion.question ===
                  "Move the directory Navigator to the home directory using an absolute path" &&
                !commandOutput && args[2] == "/User/username" && recursive == true
              ) {
                // ✅ Directory successfully created → Mark as correct and move to next question
                if (currentQuestionIndex < questions.length - 1) {
                  updateOutput(
                    `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                    `+200pts\n\nQuestion ${currentQuestionIndex + 2}: ${
                      questions[currentQuestionIndex + 1].question
                    }`
                  );
                  updateScore(200);
                  setCurrentQuestionIndex((prev) => prev + 1);
                } else {
                  // ✅ Last question answered → End quiz
                  setQuizMode(false);
                  updateOutput(
                    `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                    "+200pts Quiz completed! Well done!"
                  );
                  updateScore(200);
                  handleGameOver();
                  setIsQuestionMode(false);
                }
                setCommand(""); // Clear input field
                return;
              }
            }
            break;
          case "rm":
            commandOutput = args.length
              ? handleRm(args)
              : "rm: missing operand";
            break;
          case "mkdir":
            if (args.length) {
              commandOutput = handleMkdir(args[0]);
              if (
                currentQuestion.question === "Create a new directory" &&
                !commandOutput
              ) {
                setCreatedDirectory(args[0]); // Updates state
                // ✅ Directory successfully created → Mark as correct and move to next question
                if (currentQuestionIndex < questions.length - 1) {
                  updateOutput(
                    `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                    `+50pts \n\nQuestion ${currentQuestionIndex + 2}: ${
                      questions[currentQuestionIndex + 1].question
                    }`
                  );
                  updateScore(50);
                  setCurrentQuestionIndex((prev) => prev + 1);
                }
                setCommand(""); // Clear input field
                return;
              }
            } else {
              commandOutput = "usage: mkdir missing directory_name ...";
            }
            break;
          case "touch":
            if (
              currentDirectory !== "~" &&
              currentDirectory !== "Navigator" &&
              currentDirectory !== "information"
            ) {
              setFileCounter((prevCount) => prevCount + args.length); // Increment file counter
              // Loop through args and assign them to f1, f2, or f3 if available
              for (let i = 0; i < args.length; i++) {
                if (!f1) setF1(args[i]);
                else if (!f2) setF2(args[i]);
                else if (!f3) setF3(args[i]);
              }
            }
            commandOutput = args.length
              ? handleTouch(...args) // Pass all filenames
              : "usage: touch missing file_name ...";
            if (
              currentQuestion.question ===
                "Create three empty files in the directory you just made" &&
              !commandOutput &&
              fileCounter + args.length >= 3 &&
              currentDirectory !== "~" &&
              currentDirectory !== "Navigator" &&
              currentDirectory !== "information"
            ) {
              // ✅ Directory successfully created → Mark as correct and move to next question
              if (
                currentQuestionIndex < questions.length - 1 &&
                fileCounter == 0
              ) {
                updateOutput(
                  `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                  `+50pts\n\nQuestion ${currentQuestionIndex + 2}: ${
                    questions[currentQuestionIndex + 1].question
                  }`
                );
                updateScore(50);
                setCurrentQuestionIndex((prev) => prev + 1);
              } else if (
                currentQuestionIndex < questions.length - 1 &&
                fileCounter != 0
              ) {
                updateOutput(
                  `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                  `+35pts (touch ___ ___ ___ +50pts)\n\nQuestion ${
                    currentQuestionIndex + 2
                  }: ${questions[currentQuestionIndex + 1].question}`
                );
                updateScore(35);
                setCurrentQuestionIndex((prev) => prev + 1);
              }
              setCommand(""); // Clear input field
              return;
            }
            break;
          case "clear":
            handleClear();
            if (
              currentQuestion.question === "Clear the terminal" &&
              !commandOutput
            ) {
              // ✅ Directory successfully created → Mark as correct and move to next question
              if (currentQuestionIndex < questions.length - 1) {
                updateOutput(
                  `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                  `+10pts (ctrl + l +20pts)\n\nQuestion ${currentQuestionIndex + 2}: ${
                    questions[currentQuestionIndex + 1].question
                  }`
                );
                updateScore(10);
                setCurrentQuestionIndex((prev) => prev + 1);
              }
              setCommand(""); // Clear input field
              return;
            }
            return;
          case "cat":
            commandOutput = args.length
              ? handleCat(args)
              : "usage: cat [-n] file_name";
            console.log(args[0]);
            if (
              currentQuestion.question ===
                "Display the contents of any file with line numbers shown" &&
              args[0] === "-n"
            ) {
              // ✅ Directory successfully created → Mark as correct and move to next question
              if (currentQuestionIndex < questions.length - 1) {
                updateOutput(
                  `${currentDirectory} >> ${userInput}\n${commandOutput}`,
                  `+20pts \n\nQuestion ${currentQuestionIndex + 2}: ${
                    questions[currentQuestionIndex + 1].question
                  }`
                );
                setCurrentQuestionIndex((prev) => prev + 1);
              }
              updateScore(20);
              setCommand(""); // Clear input field
              return;
            }
            break;
          default:
            commandOutput = `command not found: ${cmd}`;
        }
      }
      if (userInput.toLowerCase() === currentQuestion.answer) {
        // ✅ Standard correct answer → Move to next question
        if (currentQuestionIndex < questions.length - 1) {
          updateOutput(
            `${currentDirectory} >> ${userInput}\n${commandOutput}`,
            `✅ Correct!\n\nQuestion ${currentQuestionIndex + 2}: ${
              questions[currentQuestionIndex + 1].question
            }`
          );
          setCurrentQuestionIndex((prev) => prev + 1);
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

    // Regular commands outside of question mode
    switch (cmd) {
      case "ls":
        result = args.length ? handleLs(args[0]) : handleLs();
        break;
      case "cd":
        result = args.length ? handleCd(args[0]) : "";
        break;
      case "mkdir":
        result = args.length
          ? handleMkdir(args[0])
          : "usage: mkdir missing directory_name ...";
        break;
      case "mv":
        if (args.length < 2) {
          result = "mv: missing file operand";
        } else {
          let recursive = false;
          let sourceIndex = 0;

          // Check if -r is the first argument
          if (args[0] === "-r") {
            recursive = true;
            sourceIndex = 1;
          }

          if (args.length - sourceIndex < 2) {
            result = "mv: missing file operand after '-r'";
          } else {
            const sourcePath = resolvePath(args[sourceIndex]); // Convert to absolute path
            const destPath = resolvePath(args[sourceIndex + 1]); // Convert to absolute path
            result = handleMv(sourcePath, destPath, recursive);
          }
        }
        break;

      case "touch":
        result = args.length
          ? handleTouch(...args) // Pass all filenames instead of just the first one
          : "usage: touch missing file_name ...";
        break;
      case "cp":
        if (args.length < 2) {
          result = "cp: missing file operand";
        } else {
          const sourcePath = resolvePath(args[0]); // Convert to absolute path
          const destPath = resolvePath(args[1]); // Convert to absolute path
          result = handleCp(sourcePath, destPath);
        }
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
        result = args.length ? handleCat(args) : "usage: cat [-n] file_name";
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
    const currentQuestion = questions[currentQuestionIndex];
    if (e.key === "Enter") {
      handleSubmit(e);
    } else if (e.key === "Tab") {
      e.preventDefault();
      handleTab();
    } else if (e.key === "ArrowUp") {
      if (commandHistory.length > 0) {
        if (historyIndex === -1) {
          setHistoryIndex(commandHistory.length - 1);
          setCommand(commandHistory[commandHistory.length - 1]);
        } else if (historyIndex > 0) {
          setHistoryIndex(historyIndex - 1);
          setCommand(commandHistory[historyIndex - 1]);
        }
      }
    } else if (e.key === "ArrowDown") {
      if (historyIndex >= 0 && historyIndex < commandHistory.length - 1) {
        setHistoryIndex(historyIndex + 1);
        setCommand(commandHistory[historyIndex + 1]);
      } else if (historyIndex === commandHistory.length - 1) {
        setHistoryIndex(-1);
        setCommand("");
      }
    } else if (e.ctrlKey && e.key === "l") {
      e.preventDefault();
      handleClear();

      // ✅ Add logic to validate the "Clear the terminal" question
      if (currentQuestion.question === "Clear the terminal") {
        if (currentQuestionIndex < questions.length - 1) {
          updateOutput(
            "", // Clear previous command output
            `+20pts \n\nQuestion ${currentQuestionIndex + 2}: ${
              questions[currentQuestionIndex + 1].question
            }`
          );
          setCurrentQuestionIndex((prev) => prev + 1);
        }
        updateScore(20);
        setCommand(""); // Clear input field
      }
    }
  };

  const currentDirectory = currentPath.split("/").filter(Boolean).pop() || "~";

  const handleNavigation = () => {
    navigate("/Unit1-Contents");
  };

  const handleContinueClick = () => {
    navigate("/Yay");
  };

  const fadeInContinueButton = () => {
    const continueButton = document.getElementById("continueButton");

    // Make the button visible first, if it was hidden
    continueButton.style.display = "inline-block";

    // Start the fade-in effect after a slight delay
    setTimeout(() => {
      continueButton.classList.add("visible"); // Trigger the fade-in effect
    }, 1000); // Delay before fading in (adjust the timing as needed)
  };

  const handleGameOver = () => {
    localStorage.setItem("score", score);
    localStorage.setItem("time", elapsedTime);
    setGameOver(true); // Set gameOver to true when the game finishes
    fadeInContinueButton();
  };

  return (
    <div className="gradient_background">
      <button
        className="back-button"
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
            correct one, it will still execute, but you must complete what is
            asked to move forward. Good luck! <br />
            <br /> Are you ready to start?
          </p>
        </div>
        <div className="score-display">Score: {score}</div>
        <div className="timer">Elapsed Time: {elapsedTime}s</div>

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
      <button
        id="continueButton"
        className="continue-button"
        style={{
          //display: "none", // Initially hidden
          position: "fixed", // Fix the position relative to the viewport
          bottom: "40px", // 100px from the bottom
          right: "40px",
        }}
        onClick={handleContinueClick} // Add a handler if needed
      >
        Continue
      </button>
    </div>
  );
};

export default Testing;
