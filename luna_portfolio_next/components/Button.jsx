const Button = ( {link, text, targetTo} ) => {
  return (
    <>
      <div>
        <a target={ !targetTo ? '_blank' : targetTo } href={ link }>
          <button id="bn30"> { text } </button>
        </a>
      </div>
      <style>{`
        #bn30 {
          margin-top: 0.5rem;
          margin-bottom: 0.5rem;
          border: 5rem;
          cursor: pointer;
          outline: none;
          font-size: 1rem;
          -webkit-transform: translate(0);
          transform: translate(0);
          background-image: linear-gradient(135deg, #4568dc, #b06ab3);
          padding: 0.5em 1rem;
          box-shadow: 2px 3px 0px #c679c9;
          -webkit-transition: box-shadow 0.25s;
          transition: box-shadow 0.25s;
          color: white;
        }
        
        #bn30:after {
          content: "";
          position: absolute;
          margin: 0.2rem;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: -1;
          background: #0e0e10;
        }
        
        #bn30:hover {
          background-image: linear-gradient(-45deg, #4568dc, #b06ab3);
          box-shadow: 5px 5px 0px #7f99f0;
        }
        
        @media screen and (max-width: 760px) {
          #bn30 {
            font-size: 0.8rem !important;
          }
        }`}
      </style>
    </>
  )
}

export default Button
