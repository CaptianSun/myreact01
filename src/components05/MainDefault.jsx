import '../styles/Main.css';

export default function MainDefault() {
    return (
        <div className='body_container'>
            <hr />
            <h3>~~ Main 영역 ~~</h3>
            <div id='contents'>
                <img src="images/summersea.jpg" alt="MainImage" width={300} height={200} />
            </div>
        </div>
    ); //return
}