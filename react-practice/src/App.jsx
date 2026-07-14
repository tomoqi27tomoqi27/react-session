export const App = () => {
  const onClickButton = () => alert('ボタンがクリックされました！');
  const contentStyleA = {
    color: 'blue',
    fontSize: '20px'
  };
  const contentStyleB = {
    color: 'red',
    fontSize: '20px'
  };
  return (
    <>
      <h1 style={ contentStyleA }>こんにちは</h1>
      <p style={contentStyleB} >お元気ですか</p>
      <button onClick={onClickButton}>ボタン</button>
    </>
  );
};