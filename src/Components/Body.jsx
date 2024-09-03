import '../App.css';
import Button from './Button';

function Body() {
  return (
    <div className='body'>
      <div className='main'>
        <div className='display_container'>
          <div className='display_cursor'></div>
        </div>
        <div className='buttons_container'>
          <Button value='AC' />
          <Button value='( )' />
          <Button value='%' />
          <Button value='/' />
          <Button value={7} />
          <Button value={8} />
          <Button value={9} />
          <Button value='%' />
          <Button value={4} />
          <Button value={5} />
          <Button value={6} />
          <Button value='x' />
          <Button value={1} />
          <Button value={2} />
          <Button value={3} />
          <Button value='+' />
          <Button value={0} />
          <Button value='.' />
          <Button value='<' />
          <Button value='=' />
        </div>
      </div>
    </div>
  );
}

export default Body;
