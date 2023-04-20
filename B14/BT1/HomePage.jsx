import { useNavigate, Navigate } from 'react-router-dom';

function HomePage() {
    const navigate = useNavigate();
    function handleNavigateToAdmin() {
        navigate('/admin');
    }
    return (
        <div>
            <h1>Trang chủ</h1>
            <button onClick={handleNavigateToAdmin}>Trang Admin</button>
        </div>
    );
}

export default HomePage;