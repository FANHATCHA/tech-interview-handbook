(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{160:function(e,t,o){"use strict";o.r(t),o.d(t,"frontMatter",(function(){return a})),o.d(t,"rightToc",(function(){return r})),o.d(t,"default",(function(){return l}));o(60),o(32),o(23),o(24),o(61),o(0);var i=o(235);function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var o=arguments[t];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i])}return e}).apply(this,arguments)}var a={id:"during-coding-interview",title:"During the Coding Interview"},r=[{value:"Before the interview (remote)",id:"before-the-interview-remote",children:[]},{value:"Self introduction",id:"self-introduction",children:[]},{value:"Upon receiving the question",id:"upon-receiving-the-question",children:[]},{value:"What to do when stuck",id:"what-to-do-when-stuck",children:[]},{value:"While coding",id:"while-coding",children:[]},{value:"After coding",id:"after-coding",children:[]}],u={rightToc:r},s="wrapper";function l(e){var t=e.components,o=function(e,t){if(null==e)return{};var o,i,n={},a=Object.keys(e);for(i=0;i<a.length;i++)o=a[i],t.indexOf(o)>=0||(n[o]=e[o]);return n}(e,["components"]);return Object(i.b)(s,n({},u,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Congratulations, you are ready to put your skills into practice! In a real coding interview, you will be given a technical question by the interviewer, write code in a real-time collaborative editor (phone screen) or on a whiteboard (on-site) to solve the problem within 30\u201345 minutes. This is where the real fun begins!"),Object(i.b)("p",null,"Your interviewer will be looking out for signals that you fit the requirements of the role and it is up to you to display those signals to them. Initially it may feel weird to be talking while you are coding as most programmers do not have the habit of explaining out loud as they are typing code. However, it is hard for the interviewer to know what you are thinking just by looking at the code that you type. If you communicate your approach to the interviewer before you start coding, you can validate your approach with them and the both of you can agree upon an acceptable approach."),Object(i.b)("h2",{id:"before-the-interview-remote"},"Before the interview (remote)"),Object(i.b)("p",null,"For phone screens/remote interviews, prepare paper and pen/pencil to jot down and visualize stuff. If you are given a question on trees and graphs, it usually helps if you draw out some examples of the data structure given in the question."),Object(i.b)("p",null,"Use earphones and make sure you are in a quiet environment. You definitely do not want to be holding a phone in one hand and only be able to type with the other. Try avoiding using speakers because if the echo is bad, communication is harder and repeating of words will just result in loss of valuable time."),Object(i.b)("h2",{id:"self-introduction"},"Self introduction"),Object(i.b)("p",null,"Prepare a self introduction by following the ",Object(i.b)("a",n({parentName:"p"},{href:"/tech-interview-handbook/self-introduction"}),"self introduction section"),"."),Object(i.b)("h2",{id:"upon-receiving-the-question"},"Upon receiving the question"),Object(i.b)("p",null,"Many candidates jump into coding the moment they hear the question. That is usually a big mistake. Take a moment to repeat the question back at the interviewer and make sure that you understand exactly what they are asking. Repeating back/rephrasing the question will reduce chances of miscommunication."),Object(i.b)("p",null,"Always seek clarification about the question upon hearing it even if it you think it is clear to you. You might discover something that you have missed out and it also sends a signal to the interviewer that you are a careful person who pays attention to details. Some interviewers deliberately omit important details to see if you ask the right questions."),Object(i.b)("p",null,"Some common questions you can ask:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"How big is the size of the input?"),Object(i.b)("li",{parentName:"ul"},"How big is the range of values?"),Object(i.b)("li",{parentName:"ul"},"What kind of values are there? Are there negative numbers? Floating points? Will there be empty inputs?"),Object(i.b)("li",{parentName:"ul"},"Are there duplicates within the input?"),Object(i.b)("li",{parentName:"ul"},"What are some extreme cases of the input?"),Object(i.b)("li",{parentName:"ul"},"Can I destroy the original array/graph/data structure?"),Object(i.b)("li",{parentName:"ul"},"How is the input stored? If you are given a dictionary of words, is it a list of strings or a Trie?")),Object(i.b)("p",null,"After you have sufficiently clarified the scope and intention of the problem, explain your high level approach to the interviewer even if it is a naive solution. If you are stuck, consider various approaches and explain out loud why it will/will not work. Sometimes your interviewer might drop hints and lead you towards the right path."),Object(i.b)("p",null,'Start with a brute force approach, communicate it to the interviewer, explain the time and space complexity and why it is bad. It is unlikely that the brute force approach will be one that you will be coding. At this point, the interviewer will usually pop the dreaded "Can we do better?" question, meaning that they are looking for a more optimal approach. In my opinion, this is usually the hardest part of the interview. In general, look for repeated work and try to optimize them by potentially caching the calculated result somewhere and reference it later, rather than having to compute it all over again. There are some tips on tackling topic-specific questions that I dive into details below.'),Object(i.b)("p",null,"Only start coding after you and your interviewer have agreed on an approach and they have given you the green light."),Object(i.b)("h2",{id:"what-to-do-when-stuck"},"What to do when stuck"),Object(i.b)("p",null,"Getting stuck during coding interviews is extremely common. But do not worry, that is part of the process and is a test of your problem solving abilities. Here are some tips to try out when you are stuck:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Talk through what you initially thought might work and explain why it doesn't",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"This can help guide you on the right track by avoiding the pitfalls"))),Object(i.b)("li",{parentName:"ul"},"Come up with more test cases and write them down",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"A pattern may emerge"))),Object(i.b)("li",{parentName:"ul"},"Think about how you would solve it without a program",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"You may spot a pattern and come up with a general algorithm for it"))),Object(i.b)("li",{parentName:"ul"},"Recall past questions related to the topic, what similar questions in the past have you encountered and what techniques did you use?"),Object(i.b)("li",{parentName:"ul"},"Enumerate through the common data structures and whether they can be applied to the question",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Dictionaries/maps are extremely common in making algorithms more efficient"))),Object(i.b)("li",{parentName:"ul"},"Look out for repeated work and determine if you can cache those computations",Object(i.b)("ul",{parentName:"li"},Object(i.b)("li",{parentName:"ul"},"Trade off memory for speed")))),Object(i.b)("h2",{id:"while-coding"},"While coding"),Object(i.b)("p",null,"Write your code with good coding style. Reading code written by others is usually not an enjoyable task. Reading horribly-formatted code by others makes it worse. Your goal is to make your interviewer understand the code you have written so that they can quickly evaluate if your code does what you say it does and whether it solves the given problem. Use clear variable names, avoid single letter names unless they are for iteration. However, if you are coding on a whiteboard, you might not want to use extremely verbose variable names for the sake of reducing the amount you have to write. Abbreviations are usually fine if you explain what it means beforehand."),Object(i.b)("p",null,"Always be explaining what you are currently writing/typing to the interviewer. This is not about literally reading out what you are typing to the interviewer. Talk about the section of the code you are currently implementing at a higher level, explain why it is written as such and what it is trying to achieve."),Object(i.b)("p",null,"While coding, if you find yourself copying and pasting code, consider whether it is necessary. If you find yourself copying and pasting one large chunk of code spanning multiple lines, it is usually an indicator that you can refactor by extracting those lines into a function and defining parameters for the differences in them. If it is just a single line you copied, usually it is fine. Do remember to change the respective variables in your copied line of code where relevant. Copy-paste errors are a common source of bugs even in day-to-day coding!"),Object(i.b)("h2",{id:"after-coding"},"After coding"),Object(i.b)("p",null,"After you have finished coding, do not immediately announce to the interviewer that you are done. In most cases, your code is usually not perfect and contains some bugs or syntax errors. What you need to do now is to review your code."),Object(i.b)("p",null,"Firstly, look through your code from start to finish as if it is the first time you are seeing it, as if it was written by someone else and you are trying to spot bugs in it. That's exactly what your interviewer will be doing. Look through and fix any minor issues you may find."),Object(i.b)("p",null,"Next, come up with small test cases and step through the code (not your algorithm!) with those sample input. What interviewers usually do after you have finished coding would be to get you to write tests. It is a huge plus if you write tests for your code even before they prompt you to do so. You should be emulating a debugger when stepping through and jot down or say out the values of the important variables as you step through the lines of code."),Object(i.b)("p",null,"If there are huge duplicated chunks of code in your solution, it would be a good chance to refactor it and demonstrate to the interviewer that you are one who values code quality. Also look out for places where you can do ",Object(i.b)("a",n({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Short-circuit_evaluation"}),"short-circuit evaluation"),"."),Object(i.b)("p",null,"Lastly, give the time/space complexity of your code and explain why it is such. You can even annotate certain chunks of your code with the various time/space complexities to demonstrate your understanding of your code and the APIs of your chosen programming language. Explain any trade-offs in your current approach vs alternative approaches, possibly in terms of time/space."),Object(i.b)("p",null,"If your interviewer is happy with the solution, the interview usually ends here. It is also not uncommon that the interviewer asks you extension questions, such as how you would handle the problem if the whole input is too large to fit into memory, or if the input arrives as a stream. This is a common follow-up question at Google where they care a lot about scale. The answer is usually a divide-and-conquer approach\u200a\u2014\u200aperform distributed processing of the data and only read certain chunks of the input from disk into memory, write the output back to disk, and combine them later on."))}l.isMDXComponent=!0},235:function(e,t,o){"use strict";o.d(t,"a",(function(){return u})),o.d(t,"b",(function(){return c}));var i=o(0),n=o.n(i),a=n.a.createContext({}),r=function(e){var t=n.a.useContext(a),o=t;return e&&(o="function"==typeof e?e(t):Object.assign({},t,e)),o},u=function(e){var t=r(e.components);return n.a.createElement(a.Provider,{value:t},e.children)};var s="mdxType",l={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},h=Object(i.forwardRef)((function(e,t){var o=e.components,i=e.mdxType,a=e.originalType,u=e.parentName,s=function(e,t){var o={};for(var i in e)Object.prototype.hasOwnProperty.call(e,i)&&-1===t.indexOf(i)&&(o[i]=e[i]);return o}(e,["components","mdxType","originalType","parentName"]),h=r(o),c=i,d=h[u+"."+c]||h[c]||l[c]||a;return o?n.a.createElement(d,Object.assign({},{ref:t},s,{components:o})):n.a.createElement(d,Object.assign({},{ref:t},s))}));function c(e,t){var o=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=o.length,r=new Array(a);r[0]=h;var u={};for(var l in t)hasOwnProperty.call(t,l)&&(u[l]=t[l]);u.originalType=e,u[s]="string"==typeof e?e:i,r[1]=u;for(var c=2;c<a;c++)r[c]=o[c];return n.a.createElement.apply(null,r)}return n.a.createElement.apply(null,o)}h.displayName="MDXCreateElement"}}]);