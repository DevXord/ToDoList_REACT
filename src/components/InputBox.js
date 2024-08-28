 
 
 
function InputBox({value, lengthMax, imageClass , imageAlt, src="",isTextArea=false,showIcon=false, showLengthCount=false , ...props } ) {
 
  return (
 
      <div className='w-full mb-4  relative h-full p-2 flex flex-row justify-between items-center'>
        {showIcon && <img draggable={false}  alt={imageAlt} src={src} className="w-5 h-5 bg-white absolute left-0 top-0 rounded-full'" ></img>}
       
        {isTextArea && <textarea draggable={false} value={value} maxLength={lengthMax} {...props}></textarea>}
        {!isTextArea && <input draggable={false}  value={value} maxLength={lengthMax}   {...props} ></input>}

       {showLengthCount && <p className='text-sm text-gray-500 absolute h-6   border-2 border-gray-800 -top-2 right-12 md:right-12 md:-bottom-1 md:top-auto  w-10 text-center bg-white rounded-full' >{lengthMax - value.length }</p>} 
      </div>
  );
}

export default InputBox;