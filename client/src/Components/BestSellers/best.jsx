import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import './best.scss'

export default function Best() {
    return (
        <>
            <section id='best'>
                <div className="best_container">
                    <div className="best_text">
                        <p>Popular Item in the market</p>
                        <h4>Best Sellers</h4>
                    </div>
                    <Swiper
                        slidesPerView={4}
                        spaceBetween={30}
                        pagination={true}
                        modules={[Pagination]}
                        className="mySwiper">
                        <SwiperSlide>
                            <div className="bestBox">
                                <div className="bestImg">
                                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp" alt="" />
                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bestBox">
                                <div className="bestImg">
                                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp" alt="" />

                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bestBox">
                                <div className="bestImg">
                                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp" alt="" />

                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                            <div className="bestBox">
                                <div className="bestImg">
                                    <img src="https://preview.colorlib.com/theme/aroma/img/product/product2.png.webp" alt="" />

                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                        </SwiperSlide>
                        <SwiperSlide>
                        <div className="bestBox">
                                <div className="bestImg">
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/product3.png.webp" alt="" />

                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                            </SwiperSlide>
                        <SwiperSlide>
                        <div className="bestBox">
                                <div className="bestImg">
                                <img src="https://preview.colorlib.com/theme/aroma/img/product/product4.png.webp" alt="" />

                                </div>
                                <div className="bestContext">
                                    <p>Dekor</p>
                                    <h6>Room Flash Light</h6>
                                    <h5>$150.00</h5>
                                </div>
                            </div>
                            </SwiperSlide>
                    </Swiper>
                </div>
            </section>
        </>
    );
}