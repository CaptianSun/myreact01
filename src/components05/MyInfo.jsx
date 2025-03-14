import { useLocation, useNavigate } from "react-router-dom";


export default function MyInfo() {

    // ** useLocation()
    //=> navigate('path_url', {stat:{id:..., name:...}})
    //  를 이용해서 Parameter 를 전달하면
    //  useLocation 의 state로 접근 가능
    //  (searchParams() 로 전달되지 않음)
    const location = useLocation();
    console.log(`** location.pathname=${location.pathname}`);
    console.log(`** location.search=${location.search}`); //쿼리스트링

    // console.log(`** location.state.id=${location.state.id}`);
    // console.log(`** location.state.userName=${location.state.userName}`);

    //=> 객체 구조분해
    const {id, userName} = location.state;
    console.log(`** location.state.id=${id}`);
    console.log(`** location.state.userName=${userName}`);

    //=> useNavigate() page 이동 Test
    const navigate = useNavigate();

    return(
        <div>
            <div className="contents">
                <p className="pageTitle">** My Infomation **</p>
                <p>UserId : {location.state.id}</p>
                <p>UserName : {location.state.userName}</p>
            </div>
            <p>~~ useNavigate() 활용 page 이동 Test</p>
            <button onClick={() => navigate(-2)}>2PagesBack</button> 
            <button onClick={() => navigate(-1)}>Bback</button> 
            <button onClick={() => navigate(1)}>Forward</button> 
            <button onClick={() => navigate(2)}>2PagesForward</button> 
            <button onClick={() => navigate('/')}>Root</button>
        </div>
    );
}
