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

  const [terminalCleared, setTerminalCleared] = useState(false); // Tracks if the terminal is cleared
  
  const questionRefs = {
    question1: useRef(null),
    question2: useRef(null),
    question3: useRef(null),
  };

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
    // Handle Ctrl + L for question 4
    if (questionKey === "question3" && e.key === "l" && e.ctrlKey) {
      setTerminalCleared(true);
      setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
      setResponses({ ...responses, [questionKey]: "" });
      return;
    }

    if (e.key === "Enter" || e.key === "Tab") {
      checkAnswer(questionKey);
    }
  };

  const checkAnswer = (questionKey) => {
    const userInput = answers[questionKey].toLowerCase().trim();

    if (questionKey === "question1") {
      if (userInput === "ls") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "file3.txt file4.txt",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: `command not found: ${userInput}`,
        });
      }
      return;
    }

    if (questionKey === "question2") {
      if (userInput === "cat file3.txt") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]:
            "Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic life One day however a small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar. The Big Oxmox advised her not to do so, because there were thousands of bad Commas, wild Question Marks and devious Semikoli, but the Little Blind Text didn’t listen. She packed her seven versalia, put her initial into the belt and made herself on the way. When she reached the first hills of the Italic Mountains, she had a last view back on the skyline of her hometown Bookmarksgrove, the headline of Alphabet Village and the subline of her own road, the Line Lane. Pityful a rethoric question ran over her cheek.",
        });
      } else if (
        userInput === "cd [file3.txt]" ||
        userInput === "cd [file4.txt]"
      ) {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "Remove the brackets and you will be correct!",
        });
      } else if (userInput === "cat file4.txt") {
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({
          ...responses,
          [questionKey]: "After an interval of some months or years, and at Phlius, a town of Peloponnesus, the tale of the last hours of Socrates is narrated to Echecrates and other Phliasians by Phaedo the 'beloved disciple.' The Dialogue necessarily takes the form of a narrative, because Socrates has to be described acting as well as speaking. The minutest particulars of the event are interesting to distant friends, and the narrator has an equal interest in them. During the voyage of the sacred ship to and from Delos, which has occupied thirty days, the execution of Socrates has been deferred. (Compare Xen. Mem.) The time has been passed by him in conversation with a select company of disciples. But now the holy season is over, and the disciples meet earlier than usual in order that they may converse with Socrates for the last time. Those who were present, and those who might have been expected to be present, are mentioned by name. There are Simmias and Cebes (Crito), two disciples of Philolaus whom Socrates 'by his enchantments has attracted from Thebes' (Mem.), Crito the aged friend, the attendant of the prison, who is as good as a friend—these take part in the conversation. There are present also, Hermogenes, from whom Xenophon derived his information about the trial of Socrates (Mem.), the 'madman' Apollodorus (Symp.), Euclid and Terpsion from Megara (compare Theaet.), Ctesippus, Antisthenes, Menexenus, and some other less-known members of the Socratic circle, all of whom are silent auditors. Aristippus, Cleombrotus, and Plato are noted as absent. Almost as soon as the friends of Socrates enter the prison Xanthippe and her children are sent home in the care of one of Crito's servants. Socrates himself has just been released from chains, and is led by this circumstance to make the natural remark that 'pleasure follows pain.' (Observe that Plato is preparing the way for his doctrine of the alternation of opposites.) 'Aesop would have represented them in a fable as a two-headed creature of the gods.' The mention of Aesop reminds Cebes of a question which had been asked by Evenus the poet (compare Apol.): 'Why Socrates, who was not a poet, while in prison had been putting Aesop into verse?'—'Because several times in his life he had been warned in dreams that he should practise music; and as he was about to die and was not certain of what was meant, he wished to fulfil the admonition in the letter as well as in the spirit, by writing verses as well as by cultivating philosophy. Tell this to Evenus; and say that I would have him follow me in death.' 'He is not at all the sort of man to comply with your request, Socrates.' 'Why, is he not a philosopher?' 'Yes.' 'Then he will be willing to die, although he will not take his own life, for that is held to be unlawful.'",
        });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }

    if (questionKey === "question3") {
      if (userInput === "clear") {
        setTerminalCleared(true);
        setCorrectAnswers({ ...correctAnswers, [questionKey]: true });
        setResponses({ ...responses, [questionKey]: "" });
      } else {
        setAnswers({ ...answers, [questionKey]: "" });
        setResponses({
          ...responses,
          [questionKey]: "",
        });
      }
      return;
    }
  };

  const allCorrect = Object.values(correctAnswers).every(Boolean);

  useEffect(() => {
    if (correctAnswers.question1 && questionRefs.question2.current) {
      questionRefs.question2.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    } else if (correctAnswers.question2 && questionRefs.question3.current) {
      questionRefs.question3.current.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [correctAnswers]);

  return (
    <div className="gradient_background2">
      <button
        className="navigate-button"
        onClick={handleNavigation}
        style={{ border: "2px solid white" }}
      >
        back
      </button>

      <div
        style={{
          position: "absolute",
          top: "10px",
          right: "20px",
          fontSize: "16px",
          color: "white",
        }}
      >
        <p>[###----] 3/7</p>
      </div>

      <div className="content">
        <p>
          Concatenate and Print Files! <br /> Abbreviated <span class="highlight">cat</span>, this command
          displays the contents of a file. The content within the file will be
          displayed in its entirety right below the command line.
          <br />
          If you want to move into a directory within the current directory you
          can type: <br /> cat [file name] &emsp;&emsp;&emsp;&emsp; (ex: cat
          file1.txt) <br />
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
                />
              </div>
              <p className="fade-in">{responses.question1}</p>
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
                    />
                  </div>
                  <p className="fade-in">{responses.question2}</p>
                </>
              )}
            </div>

            {/* Question 4 */}
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
                    />
                  </div>
                  <p className="fade-in">{responses.question3}</p>
                </>
              )}
            </div>
          </>
        )}

        {/* Continue button */}
        {allCorrect && (
          <button
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
