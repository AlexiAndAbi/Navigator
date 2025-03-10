import React, { useState, useEffect, useRef } from "react";
import "./unit1.css";
import { useNavigate } from "react-router-dom";

function Page3() {
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [responses, setResponses] = useState({
    question1: "",
    question2: "",
    question3: "",
  });
  const [correctAnswers, setCorrectAnswers] = useState({
    question1: false,
    question2: false,
    question3: false,
  });
  const [terminalCleared, setTerminalCleared] = useState(false);

  // Container refs (if needed for scrolling the whole block)
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
  };

  // Input refs for auto–focus
  const inputRef1 = useRef(null);
  const inputRef2 = useRef(null);
  const inputRef3 = useRef(null);

  // Ref for the continue button
  const continueButtonRef = useRef(null);

  // Initially focus the first input
  useEffect(() => {
    if (inputRef1.current) {
      inputRef1.current.focus();
    }
  }, []);

  // When question1 is answered correctly, scroll to and focus question2
  useEffect(() => {
    if (correctAnswers.question1 && inputRef2.current) {
      setTimeout(() => {
        inputRef2.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef2.current.focus();
      }, 150);
    }
  }, [correctAnswers.question1]);

  // When question2 is answered correctly, scroll to and focus question3
  useEffect(() => {
    if (correctAnswers.question2 && inputRef3.current) {
      setTimeout(() => {
        inputRef3.current.scrollIntoView({ behavior: "smooth", block: "center" });
        inputRef3.current.focus();
      }, 150);
    }
  }, [correctAnswers.question2]);

  // When all questions are answered correctly, scroll to and focus the continue button
  const allCorrect = Object.values(correctAnswers).every(Boolean);
  useEffect(() => {
    if (allCorrect && continueButtonRef.current) {
      setTimeout(() => {
        continueButtonRef.current.scrollIntoView({ behavior: "smooth", block: "center" });
        continueButtonRef.current.focus();
      }, 150);
    }
  }, [allCorrect]);

  const handleNavigation = () => {
    navigate("/Unit1-Level2-page2");
  };

  const handleNavigation2 = () => {
    navigate("/Unit1-Level2-page4");
  };

  const handleInputChange = (e, questionKey) => {
    setAnswers({ ...answers, [questionKey]: e.target.value });
  };

  const handleKeyPress = (e, questionKey) => {
    // Optional: If you want to handle Ctrl+L for question3 to clear the terminal:
    if (questionKey === "question3" && e.key === "l" && e.ctrlKey) {
      setTerminalCleared(true);
      setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
      setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      return;
    }
    if (e.key === "Enter" || e.key === "Tab") {
      e.preventDefault();
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].toLowerCase().trim();
    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: "file3.txt file4.txt",
        }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: `command not found: ${userInput}`,
        }));
      }
      return;
    }
    if (questionKey === "question2") {
      if (userInput === "cat file3.txt") {
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.",
        }));
      } else if (
        userInput === "cd [file3.txt]" ||
        userInput === "cd [file4.txt]"
      ) {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]: "Remove the brackets and you will be correct!",
        }));
      } else if (userInput === "cat file4.txt") {
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({
          ...prev,
          [questionKey]:
            "After an interval of some months or years, and at Phlius, a town of Peloponnesus, the tale of the last hours of Socrates is narrated to Echecrates and other Phliasians by Phaedo the 'beloved disciple.' The Dialogue necessarily takes the form of a narrative, because Socrates has to be described acting as well as speaking. The minutest particulars of the event are interesting to distant friends, and the narrator has an equal interest in them. During the voyage of the sacred ship to and from Delos, which has occupied thirty days, the execution of Socrates has been deferred. (Compare Xen. Mem.) The time has been passed by him in conversation with a select company of disciples. But now the holy season is over, and the disciples meet earlier than usual in order that they may converse with Socrates for the last time. Those who were present, and those who might have been expected to be present, are mentioned by name. There are Simmias and Cebes (Crito), two disciples of Philolaus whom Socrates 'by his enchantments has attracted from Thebes' (Mem.), Crito the aged friend, the attendant of the prison, who is as good as a friend—these take part in the conversation. There are present also, Hermogenes, from whom Xenophon derived his information about the trial of Socrates (Mem.), the 'madman' Apollodorus (Symp.), Euclid and Terpsion from Megara (compare Theaet.), Ctesippus, Antisthenes, Menexenus, and some other less-known members of the Socratic circle, all of whom are silent auditors. Aristippus, Cleombrotus, and Plato are noted as absent. Almost as soon as the friends of Socrates enter the prison Xanthippe and her children are sent home in the care of one of Crito's servants.",
        }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      }
      return;
    }
    if (questionKey === "question3") {
      if (userInput === "clear") {
        setTerminalCleared(true);
        setCorrectAnswers((prev) => ({ ...prev, [questionKey]: true }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      } else {
        setAnswers((prev) => ({ ...prev, [questionKey]: "" }));
        setResponses((prev) => ({ ...prev, [questionKey]: "" }));
      }
      return;
    }
  };

  return (
    <div className="gradient_background2">
      <button className="back-button" onClick={handleNavigation} style={{ border: "2px solid white" }}>
        back
      </button>
      <div style={{ position: "fixed", top: "10px", right: "20px", fontSize: "16px", color: "white" }}>
        <p>[###----] 3/7</p>
      </div>
      <div style={{ position: "fixed", top: "85px", right: "20px" }}>
        <img src={"/Navigator/unit1filetrees/FileTree4.png"} alt="Progress Icon" width="450" height="600" />
      </div>
      <div className="content">
        <p>
          Concatenate and Print Files! <br /> Abbreviated <span className="highlight2">cat</span>, this command displays the contents of a file. The content within the file will be displayed in its entirety right below the command line.
          <br />
          If you want to move into a directory within the current directory you can type: <br /> cat [file name] &emsp;&emsp;&emsp;&emsp; (ex: cat file1.txt) <br />
        </p>

        {/* Hide questions 1-3 if the terminal is cleared */}
        {!terminalCleared && (
          <>
            {/* Question 1 */}
            <div ref={questionRefs.question1}>
              <p>List the contents of the current directory.</p>
              <div className="command-line">
                <span className="directory-prompt">~ {">>"}</span>
                <input
                  type="text"
                  style={{ fontSize: "20px", color: "white" }}
                  className="input-box"
                  value={answers.question1}
                  onChange={(e) => handleInputChange(e, "question1")}
                  onKeyDown={(e) => handleKeyPress(e, "question1")}
                  disabled={correctAnswers.question1}
                  ref={inputRef1}
                />
              </div>
              <p className="fade-in unique-font">{responses.question1}</p>
            </div>

            {/* Question 2 */}
            <div ref={questionRefs.question2}>
              {correctAnswers.question1 && (
                <>
                  <p>Print the contents of any file.</p>
                  <div className="command-line">
                    <span className="directory-prompt">~ {">>"}</span>
                    <input
                      type="text"
                      style={{ fontSize: "20px", color: "white" }}
                      className="input-box"
                      value={answers.question2}
                      onChange={(e) => handleInputChange(e, "question2")}
                      onKeyDown={(e) => handleKeyPress(e, "question2")}
                      disabled={correctAnswers.question2}
                      ref={inputRef2}
                    />
                  </div>
                  <p className="fade-in unique-font">{responses.question2}</p>
                </>
              )}
            </div>

            {/* Question 3 */}
            <div ref={questionRefs.question3}>
              {correctAnswers.question2 && (
                <>
                  <p>Clear the terminal.</p>
                  <div className="command-line">
                    <span className="directory-prompt">~ {">>"}</span>
                    <input
                      type="text"
                      style={{ fontSize: "20px", color: "white" }}
                      className="input-box"
                      value={answers.question3}
                      onChange={(e) => handleInputChange(e, "question3")}
                      onKeyDown={(e) => handleKeyPress(e, "question3")}
                      disabled={correctAnswers.question3}
                      ref={inputRef3}
                    />
                  </div>
                  <p className="fade-in unique-font">{responses.question3}</p>
                </>
              )}
            </div>
          </>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
            ref={continueButtonRef}
            className="navigate-button fade-in"
            onClick={handleNavigation2}
            style={{ border: "2px solid white", marginTop: "20px" }}
          >
            continue
          </button>
        )}
      </div>
    </div>
  );
}

export default Page3;
