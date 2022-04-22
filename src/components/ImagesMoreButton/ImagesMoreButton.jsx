const ImagesMoreButton = ({ onClick }) => {
    return (
        <div className="ButtonWrap">
            <button className="Button" type="button" onClick={onClick}>
                Load more
            </button>
        </div>
    );
};

export default ImagesMoreButton;
