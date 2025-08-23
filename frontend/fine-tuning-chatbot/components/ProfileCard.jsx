export default function ProfileCard({ name, job, intro, image }) {
    return (
        <div className='profile-card'>
            <div style={{ display: 'flex', alignItems: 'center' }}> 
                <img src={image} alt={`${name}의 사진`} className="profile-img" />
                <h2 style={{ marginLeft: '10px' }}>{name}</h2>    
            </div>
            <p>직업: {job}</p>
            <p>소개: {intro}</p>
        </div>
    );
};