import React, { useState, useRef, useEffect } from 'react';
import './WritePage.css';
import Header from '../../components/Header/Header';
import Sidebar from '../../components/Sidebar/Sidebar';

const WritePage = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [fontSize, setFontSize] = useState('3'); // execCommand fontSize: 1-7
  const [activeStyles, setActiveStyles] = useState({
    bold: false,
    italic: false,
    underline: false,
    h1: false,
    h2: false,
  });
  const [isModifierHeld, setIsModifierHeld] = useState(false);
  const editorRef = useRef(null);

  const updateActiveStyles = () => {
    setActiveStyles({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      h1: document.queryCommandValue('formatBlock') === 'h1',
      h2: document.queryCommandValue('formatBlock') === 'h2',
    });

    // Also update fontSize selector if possible
    const currentFontSize = document.queryCommandValue('fontSize');
    if (currentFontSize) {
      setFontSize(currentFontSize);
    }
  };

  const handleToolbarClick = (type, value) => {
    if (!editorRef.current) return;

    editorRef.current.focus();

    switch (type) {
      case 'bold':
        document.execCommand('bold', false, null);
        break;
      case 'italic':
        document.execCommand('italic', false, null);
        break;
      case 'underline':
        document.execCommand('underline', false, null);
        break;
      case 'h1':
        document.execCommand('formatBlock', false, 'H1');
        break;
      case 'h2':
        document.execCommand('formatBlock', false, 'H2');
        break;
      case 'fontSize':
        document.execCommand('fontSize', false, value);
        setFontSize(value);
        break;
      case 'image':
        const imageUrl = prompt('이미지 URL을 입력하세요:');
        if (imageUrl) document.execCommand('insertImage', false, imageUrl);
        break;
      case 'link':
        const linkUrl = prompt('링크 URL을 입력하세요:');
        if (linkUrl) document.execCommand('createLink', false, linkUrl);
        break;
      case 'copy':
        const text = editorRef.current.innerText;
        navigator.clipboard.writeText(text);
        alert('내용이 클립보드에 복사되었습니다.');
        return;
      default:
        break;
    }
    setContent(editorRef.current.innerHTML);
    updateActiveStyles();
  };

  const handleEditorClick = (e) => {
    updateActiveStyles();

    // Handle Cmd+Click (Mac) or Ctrl+Click (Windows/Linux) to follow links
    if (e.metaKey || e.ctrlKey) {
      const link = e.target.closest('a');
      if (link) {
        let url = link.getAttribute('href');
        if (url) {
          e.preventDefault();
          e.stopPropagation();

          // Ensure URL has a protocol if it's not relative/anchor
          if (!url.match(/^https?:\/\//i) && !url.startsWith('/') && !url.startsWith('#')) {
            url = 'https://' + url;
          }

          console.log('Navigating to:', url);
          window.open(url, '_blank', 'noopener,noreferrer');
        }
      }
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        setIsModifierHeld(true);
      }
    };
    const handleKeyUp = (e) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        setIsModifierHeld(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);
    // Also reset if window loses focus to avoid stuck state
    window.addEventListener('blur', () => setIsModifierHeld(false));

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
      window.removeEventListener('blur', () => setIsModifierHeld(false));
    };
  }, []);

  useEffect(() => {
    // Set default paragraph separator to 'p' for better Enter key behavior
    document.execCommand('defaultParagraphSeparator', false, 'p');
  }, []);

  const handleInput = (e) => {
    setContent(e.currentTarget.innerHTML);
    updateActiveStyles();
  };

  const handleSubmit = () => {
    const currentContent = editorRef.current ? editorRef.current.innerHTML : content;
    if (!title.trim() || !currentContent.trim() || currentContent === '<br>') {
      alert('제목과 내용을 모두 입력해주세요.');
      return;
    }
    alert('게시글이 성공적으로 등록되었습니다!');
    console.log({ title, content: currentContent });
  };

  const handleSaveDraft = () => {
    const currentContent = editorRef.current ? editorRef.current.innerHTML : content;
    const draft = { title, content: currentContent, timestamp: new Date().toISOString() };
    localStorage.setItem('hdf_write_draft', JSON.stringify(draft));
    alert('임시저장이 완료되었습니다.');
  };

  return (
    <div className={`home-container write-page-container ${isModifierHeld ? 'modifier-pressed' : ''}`}>
      <Header />
      <div className="home-content">
        <aside className="left-sidebar">
          <Sidebar />
        </aside>

        <main className="feed-section write-main-refactored">
          <div className="write-card-header">
            <h1 className="page-title">글 작성하기</h1>
            <div className="action-buttons">
              <button className="draft-btn" onClick={handleSaveDraft}>임시저장</button>
              <button className="submit-btn" onClick={handleSubmit}>등록하기</button>
            </div>
          </div>

          <div className="write-card">
            <input
              type="text"
              className="title-input"
              placeholder="제목을 입력해주세요."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <div className="editor-container">
              <div className="editor-toolbar">
                <div className="font-size-control">
                  <select
                    className="font-size-select"
                    value={fontSize}
                    onChange={(e) => handleToolbarClick('fontSize', e.target.value)}
                  >
                    <option value="1">10</option>
                    <option value="2">13</option>
                    <option value="3">16</option>
                    <option value="4">18</option>
                    <option value="5">24</option>
                    <option value="6">32</option>
                    <option value="7">48</option>
                  </select>
                </div>
                <div className="toolbar-actions">
                  <button
                    className={`toolbar-btn bold ${activeStyles.bold ? 'active' : ''}`}
                    onClick={() => handleToolbarClick('bold')}
                  >B</button>
                  <button
                    className={`toolbar-btn italic ${activeStyles.italic ? 'active' : ''}`}
                    onClick={() => handleToolbarClick('italic')}
                  >I</button>
                  <button
                    className={`toolbar-btn underline ${activeStyles.underline ? 'active' : ''}`}
                    onClick={() => handleToolbarClick('underline')}
                  >U</button>
                  <button
                    className={`toolbar-btn h1 ${activeStyles.h1 ? 'active' : ''}`}
                    onClick={() => handleToolbarClick('h1')}
                  >H1</button>
                  <button
                    className={`toolbar-btn h2 ${activeStyles.h2 ? 'active' : ''}`}
                    onClick={() => handleToolbarClick('h2')}
                  >H2</button>
                  <button className="toolbar-btn image-icon" onClick={() => handleToolbarClick('image')}>🖼️</button>
                  <button className="toolbar-btn link-icon" onClick={() => handleToolbarClick('link')}>🔗</button>
                  <button className="toolbar-btn copy-icon" onClick={() => handleToolbarClick('copy')}>📄</button>
                </div>
              </div>
              <div
                ref={editorRef}
                className="content-editor"
                contentEditable="true"
                onInput={handleInput}
                onClick={handleEditorClick}
                onKeyUp={updateActiveStyles}
                spellCheck="false"
                suppressContentEditableWarning={true}
              />
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default WritePage;
