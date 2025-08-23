import ProfileCard from "../components/ProfileCard";

export default function ProfilePage() {
  return (
    <div>
            <main style={{ maxWidth: '600px', margin: '0 auto', padding: '20px' }}>
            <h1>프로필 카드</h1>
            <hr />
            
            <ProfileCard name="김현정" job="가정주부" intro="엄마" image="https://encrypted-tbn2.gstatic.com/images?q=tbn:ANd9GcQVgrg6ysc7LTXcEAjieMRdq2nk8TYEXUPrEK1xo1eFpdbJu3gRpOQr-rbPuuKr6UA2Bf94A5m-eM9LqE5RkypHaw" />
            <ProfileCard name="박철홍" job="개발자" intro="아빠" image="https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcSup09b_5L60mwvI6uTGyt5pknC7BzKXZyhp-q0CZsMWUaY1afpOCt-GqirrhhWI1hi7VfsehkBuiD8EOZLqzv7Ow" />
            <ProfileCard name="박서우" job="어린이" intro="아들" image="https://daily.hankooki.com/news/photo/201801/20180104_1_bodyFimg_542628.jpg" />
            </main>
        </div>
  );
}
