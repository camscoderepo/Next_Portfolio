import Footer from './Footer';
import Navbar from './Navbar';

const MainLayout = ({ children }) => (
    <div>
        <Navbar />
            <div>{children}</div>
        <Footer />
    </div>
)

export default MainLayout;