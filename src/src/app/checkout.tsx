import './checkout.css';

export const Checkout = () => {
    <div className="container">
    <div className="judul">Checkout</div>
    <div className="kotak kotak1">
      <div className="image-container">
        <img src="/assets/image3.svg" alt="Image"/>
        <div className="text-wrapper">
        <div className="textJudul">T8CHNOFEST</div>
        <div className="textKat">E-SPORTS</div>
        <div className="textHarga">Rp.200.000,-</div>
        </div>
      </div>
    </div>
    <div className="spacer"></div>
    <div className="kotak kotak2">
        <div className="text-wrapper">
            <div className="textJudul2">SUMMARY</div>
            <div className="item">
              <span className="item-name">Biaya Perlombaan</span>
              <span className="item-price">Rp200.000,-</span>
            </div>
            <div className="item">
              <span className="item-name">Platform Fee</span>
              <span className="item-price">Rp5000,-</span>
            </div>
            <div className="total">
              <span className="total-label">Total</span>
              <span className="total-price">Rp205.000,-</span>
            </div>
        </div>
        <div className="submit-container"> 
        <button className="custom-button">Checkout</button>
        </div>
    </div>
    </div>    
};