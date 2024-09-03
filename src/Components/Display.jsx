// Display component to show the current value
const Display = ({ value }) => (
  <div className='display_container'>
    <div className='text_container'>
      {value}
      <div className='display_cursor' />
    </div>
  </div>
);

export default Display;
