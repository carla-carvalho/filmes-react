import './Home.scss';
import Navbar from '../../components/Navbar/Navbar';
import Frame from '../../components/Frame/Frame';
import Card from '../../components/Card/Card';

const Home = () => {


    return (
        <div className="background">
            <Navbar />
            <Frame
             image="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/a58a7719-0dcf-4e0b-b7bb-d2b725dbbb8e/deu7no3-75f2aea5-d668-4ddd-8d73-9203f8b3004f.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcL2E1OGE3NzE5LTBkY2YtNGUwYi1iN2JiLWQyYjcyNWRiYmI4ZVwvZGV1N25vMy03NWYyYWVhNS1kNjY4LTRkZGQtOGQ3My05MjAzZjhiMzAwNGYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.mGJeERKLIjquFjWiKP7nqZfaLFv9d4WT40Y-xQqErRo"
             imageAlt=""
             texto="" />
            <div className="home__cards">
                <Card 
                img="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/XtfNBKnLDpg1waJhDF5FAd5OEX.jpg"
                name="Addams Family Reunion"/>
            </div>
        </div>

   )
}

export default Home;