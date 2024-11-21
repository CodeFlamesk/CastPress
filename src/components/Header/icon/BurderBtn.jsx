const BurgerBtn = ({ isOpen }) => {
    return (
        <div className="menu-icon">
                        <input 
                type="checkbox" 
                className="menu-icon-checkbox" 
                checked={isOpen} 
                 aria-label="menu"
            />
            <div>
                <span className={`bar `}></span>
                <span className={`bar `}></span>
            </div>
        </div>
    );
};

export default BurgerBtn;
