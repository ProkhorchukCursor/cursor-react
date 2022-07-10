import "./Title.css"

const Title = ({ title, subtitle = false }) => {
 return (
  <div className='flex-center'>
   <h2 className={subtitle ? 'subtitle' : "title"}>{title}</h2>
  </div>
 );
};

export default Title;
