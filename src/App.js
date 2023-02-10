import React, { useState, useEffect } from "react";
import JobListing from "./components/JobListing";
import Header from "./components/Header";
import Modal from "react-modal";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

function App() {
  const [issues, setIssues] = useState([]);
  const [isNewTransictionModalOpen, setIsNewTransictionModalOpen] =
    useState(false);
  const [selectedIssueIndex, setSelectedIssueIndex] = useState(null);

  function handleOpenNewTransactionModal(issue) {
    setSelectedIssueIndex(issue);
    setIsNewTransictionModalOpen(true);
  }

  function handleCloseNewTransactionModal() {
    setIsNewTransictionModalOpen(false);
  }

  useEffect(() => {
    fetch("https://api.github.com/repos/frontendbr/vagas/issues")
      .then((response) => response.json())
      .then((data) => {
        setIssues(data);
      });
  }, []);

  return (
    <>
      <Header />
      <JobListing
        issues={issues}
        setSelectedIssueIndex={setSelectedIssueIndex}
        handleOpenNewTransactionModal={handleOpenNewTransactionModal}
      />
      <Modal
        isOpen={isNewTransictionModalOpen}
        onRequestClose={handleCloseNewTransactionModal}
        className="react-modal-content"
        overlayClassName="react-modal-overlay"
        appElement={document.getElementById('root')}
      >
        {selectedIssueIndex && (
          <ReactMarkdown rehypePlugins={[rehypeRaw]}>
            {selectedIssueIndex.body}
          </ReactMarkdown>
        )}
      </Modal>
    </>
  );
}

export default App;
