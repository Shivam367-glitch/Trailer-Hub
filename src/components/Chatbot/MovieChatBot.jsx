import { useState, useRef, useEffect, useMemo } from "react";
import {
  FiMessageCircle,
  FiX,
  FiMinimize2,
  FiMaximize2,
  FiSend,
  FiCalendar,
  FiClock,
  FiStar,
  FiInfo,
  FiTag,
  FiDollarSign,
  FiGlobe,
  FiFlag,
  FiFilm,
} from "react-icons/fi"; 
import ChatBotLoading from "../Loading/ChatBotLoading";
import "./MovieChatBot.css";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/common";
import { useSelector } from "react-redux";

const MovieChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const movie = useSelector((store) => store?.movie?.viewedMovie);
  const messagesEndRef = useRef(null); 
  
  const {
    runtime,
    release_date,
    vote_average,
    tagline,
    budget,
    revenue,
    production_companies,
    spoken_languages,
    production_countries,
    status,
    credits
  } = movie || {}; 


  const suggestedQuestions = useMemo(
    () => [
      { label: "Release Date", icon: <FiCalendar /> },
      { label: "Runtime", icon: <FiClock /> },
      { label: "Rating", icon: <FiStar /> },
      { label: "Tagline", icon: <FiTag /> },
      { label: "Budget", icon: <FiDollarSign /> },
      { label: "Revenue", icon: <FiDollarSign /> },
      { label: "Language", icon: <FiGlobe /> },
      { label: "Country", icon: <FiFlag /> },
      { label: "Production Companies", icon: <FiFilm /> },
      { label: "Status", icon: <FiInfo /> },
      {label: "Cast", icon: <FiInfo /> },
      {label:"Director", icon: <FiInfo />},
    ],
    [],
  );

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

 
  useEffect(() => {
    scrollToBottom();
  }, [isMinimized,messages]);

  const addMessage = (type, text) => {
    const timestamp = new Date().toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
    });

    setMessages((prev) => [...prev, { type, text, timestamp }]);
  };  

  const handleChatClose = () => { 
    setIsOpen(false);
    setIsMinimized(false);
    setMessages([]);
    setInputValue("");
    setIsLoading(false);
  } 


  const getMovieResponse = (question) => {
  if (!movie) return "No movie data available.";

  const responses = {
    "Runtime": () => {
      if (runtime > 0) {
        const hr = Math.floor(runtime / 60);
        const min = runtime % 60;
        return `Runtime: ${hr} hr ${min} min`;
      }
      return "Runtime information not available.";
    },

    "Release Date": () =>
      release_date
        ? `Release Date: ${formatDate(release_date)}`
        : "Release date not available.",

    "Rating": () => {
      const userScore = vote_average
        ? `${Math.ceil(vote_average * 10)}%`
        : "Not available";

      return `User Rating: ${vote_average || "N/A"}/10 (${userScore})`;
    },

    "Tagline": () =>
      tagline ? `Tagline: "${tagline}"` : "Tagline not available.",

    "Budget": () =>
      budget
        ? `Budget: $${budget.toLocaleString()}`
        : "Budget information not available.",

    "Revenue": () =>
      revenue
        ? `Box Office Revenue: $${revenue.toLocaleString()}`
        : "Revenue information not available.",

    "Production Companies": () => {
      const companies = production_companies?.map((c) => c.name).join(", ");
      return companies
        ? `Production Companies: ${companies}`
        : "Production company information not available.";
    },

    "Language": () =>{
      const languages = spoken_languages?.map((l) => l.english_name).join(", ");

      return languages ? `Spoken Languages are: ${languages}`
        : "Language information not available.";
    },
    "Country": () => {
      const countries = production_countries?.map((c) => c.name).join(", ");
      return countries
        ? `Production Countries: ${countries}`
        : "Country information not available.";
    },

    "Status": () =>
      status ? `Movie Status: ${status}` : "Status information not available.",

    "Cast": () => {
      const castMembers = credits?.cast?.slice(0, 5);

      return castMembers?.length ? (
        <>
          <p>Top Cast:</p>
          <ul>
            {castMembers.map((c) => (
              <li key={c.id}>
                <Link to={`/people/${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        "Cast information is not available."
      );
    },

    "Director": () => {
      const directors = credits?.crew?.filter((c) => c.job === "Director");

      return directors?.length ? (
        <>
          <p>Director:</p>
          <ul>
            {directors.map((c) => (
              <li key={c.id}>
                <Link to={`/people/${c.id}`}>{c.name}</Link>
              </li>
            ))}
          </ul>
        </>
      ) : (
        "Director information not available."
      );
    },
  };

  return responses[question]
    ? responses[question]()
    : "Sorry, I don't have information about that.";
};


  const handleSendMessage = (e) => {
    e.preventDefault(); // this is needed to prevent form submission which causes page reload. We want to handle everything in React state instead(if we select one suggested question and then  select another ,then the pevious one). 
    const userMessage =  inputValue.trim();
    if (!userMessage) return;

    setInputValue("");
    addMessage("user", userMessage);

    setIsLoading(true);

    setTimeout(() => {
      const response = getMovieResponse(userMessage);
      addMessage("bot", response);
      setIsLoading(false);
    }, 400);
  };
  
  if (!movie) return null;

  return (
    <>
      {!isOpen && (
        <div className="chatbot-floating-button">
          <button
            className="ask-movie-btn"
            onClick={() => {
              setIsOpen(true);

              if (messages.length === 0) {
                addMessage(
                  "bot",
                  "Hi! I'm Trailer Hub AI. I can help you learn more about this movie!",
                );
              }
            }}
          >
            <FiMessageCircle />
          </button>
        </div>
      )}

      {isOpen && (
        <div className={`chatbot-container ${isMinimized ? "minimized" : ""}`}>
          <div className="chatbot-header">
            <div className="chatbot-title">
              <FiMessageCircle className="chatbot-icon" />
              <div>
                <h5>Trailer Hub AI</h5>
                <small>Ask me anything about this movie</small>
              </div>
            </div>

            <div className="chatbot-controls">
              <button
                className="chatbot-btn-icon"
                onClick={() => setIsMinimized(!isMinimized)}
              >
                {isMinimized ? <FiMaximize2 /> : <FiMinimize2 />}
              </button>

              <button
                className="chatbot-btn-icon"
                onClick={handleChatClose}
              >
                <FiX />
              </button>
            </div>
          </div>

          {!isMinimized && (
            <>
              <div className="chatbot-messages">
                {messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={`chatbot-message ${
                      msg.type === "user" ? "user-message" : "bot-message"
                    }`}
                  >
                    <div className="message-content">
                      <div className="message">{msg.text}</div>
                      <span className="message-time">{msg.timestamp}</span>
                    </div>
                  </div>
                ))}
                {isLoading && <ChatBotLoading/>}
                {!isLoading && (
                  <div className="suggested-questions">
                    {suggestedQuestions.map((q, idx) => (
                      <button
                        key={idx}
                        className="suggested-btn d-flex flex-wrap gap-2 align-items-center"
                        onClick={() =>setInputValue(q.label) }
                        disabled={isLoading}
                      >
                        <span className="suggested-icon">{q.icon}</span>
                        {q.label}
                      </button>
                    ))}
                  </div>
                )}

                <div ref={messagesEndRef} />
              </div>

              <form className="chatbot-input-form" >
                <input
                  type="text"
                  className="chatbot-input"
                  placeholder="Select Suggested Question..."
                  value={inputValue}
                  disabled={!inputValue.trim()} 

                />

                <button
                  className="chatbot-send-btn"
                  disabled={isLoading || !inputValue.trim()} 
                  onClick={(e) => handleSendMessage(e)}
                >
                  <FiSend />
                </button>
              </form>

              <div className="chatbot-footer">
                <small>Powered by TMDB</small>
              </div>
            </>
          )}
        </div>
      )}
    </>
  );
};

export default MovieChatBot;
