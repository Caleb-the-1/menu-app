import MenuItem from './MenuItem';

function App() {
  return (
    <div style={{ padding: '30px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '40px' }}>MENU</h1>

      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap:'20px'}}>
        <MenuItem
          title="Ekuru"
          description="kuru beans"
          price="500"
          image="/Ekuru.jpg"
        />
        <MenuItem
          title="Jollof Rice x"
          description="Smokey Jay rice"
          price="1000"
          image="/Jellof Rice X.jpg"
        />
        <MenuItem
          title="Fried Rice x"
          description="Fried Rice"
          price="800"
          image="/Fried Rice x.jpg"
        />
        <MenuItem
          title="Chairman Chow e"
          description="A combo of our signature rice or pasta..."
          price="3650"
          image="https://via.placeholder.com/300x150?text=Chairman+Chow"
        />
        <MenuItem
          title="Chairman"
          description="Chow for Chairman"
          price="2500"
          image="https://via.placeholder.com/300x150?text=Chairman"
        />
        <MenuItem
          title="Yam"
          description="New stuff"
          price="2000"
          image="/Yam.jpg"
        />
        <MenuItem
          title="Plantain"
          description="Plantainnnnnnnnnnnnnnnn!!!"
          price="400"
          image="/Plantain.jpg"
        />
      </div>
    </div>
  );
}

export default App;


