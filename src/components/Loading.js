

 
function Loading({text = '',altImg, spinClassName, textClassName, showSpin=false ,...props}) {
    const bonceText = text.split('');
       
    return (<> 
       {showSpin && <div className={`relative animate-spin ${spinClassName}`} >

          

        </div> }
         
        <p className={`loading-text text-[0.4rem] sm:text-2xl lg:text-xs xl:text-3xl uppercase absolute ${textClassName}`}>
            {text && bonceText.map((text, index) => (
                <span
                key={index}
                className="bounceAnim"
                style={{ animationDelay: `${index * 0.1}s` }}  
                >
                {text === "_" ? " " : text}
         
                </span>
            ))}
        </p>

        </>
    );
  }
  
  export default Loading;
 