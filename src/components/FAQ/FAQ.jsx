import '../FAQ/FAQ.css'
import { useState, useRef, useEffect } from "react";

export default function FAQ({ title, text }) {
 const [isOpen, setIsOpen] = useState(false);
 const contentRef = useRef(null);
 const [height, setHeight] = useState(0);

 useEffect(() => {
  if (isOpen) {
   setHeight(contentRef.current.scrollHeight);
  }
  else {
   setHeight(0);
  }
 }, [isOpen]);

 return (
  <div className='faqContainer'>
   <div onClick={() => setIsOpen(!isOpen)} className='faqTitle'>{title}</div>
   <div ref={contentRef} className='faqText'style={{ maxHeight: `${height}px` }}>{text}</div>
  </div>
 );
}