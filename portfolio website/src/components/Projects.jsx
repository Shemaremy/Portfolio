import React, { useState, useEffect } from "react";
import '../App.css';
import './Mods.css';
import { useTranslation } from 'react-i18next'; 
import Isotope from 'isotope-layout';
import imagesLoaded from 'imagesloaded';
import 'swiper/swiper-bundle.css';
import GLightbox from 'glightbox';
import 'glightbox/dist/css/glightbox.min.css';
import { FetchProductsPreloader } from "./Preloader";
import { renderToString } from 'react-dom/server';




function initSwiperWithCustomPagination(swiperElement, config) {
  config.pagination = {
    el: swiperElement.querySelector('.swiper-pagination'),
    clickable: true
  };
  new Swiper(swiperElement, config);
}













function Part6() {

  const { t } = useTranslation();

  const [mainpreloader, setMainpreloader] = useState(false);
  const [activeButton, setActiveButton] = useState(''); 
  const [portfolioItems, setPortfolioItems] = useState([]);











// -------------- Portfolio products animations and filtering ---------------------------------------------------
// -------------- Portfolio products animations and filtering ---------------------------------------------------
// -------------- Portfolio products animations and filtering ---------------------------------------------------


useEffect(() => {
  document.querySelectorAll('.isotope-layout').forEach(function(isotopeItem) {
    let layout = isotopeItem.getAttribute('data-layout') ?? 'masonry';
    let filter = isotopeItem.getAttribute('data-default-filter') ?? '*';
    let sort = isotopeItem.getAttribute('data-sort') ?? 'original-order';

    let initIsotope;
    imagesLoaded(isotopeItem.querySelector('.isotope-container'), function() {
      initIsotope = new Isotope(isotopeItem.querySelector('.isotope-container'), {
        itemSelector: '.isotope-item',
        layoutMode: layout,
        filter: filter,
        sortBy: sort
      });
    });

    isotopeItem.querySelectorAll('.isotope-filters li').forEach(function(filters) {
      filters.addEventListener('click', function() {
        isotopeItem.querySelector('.isotope-filters .filter-active').classList.remove('filter-active');
        this.classList.add('filter-active');
        
        const selectedFilter = this.getAttribute('data-filter');
        //const selectedFilter = this.getAttribute('category-filter');
        //setActiveButton(selectedFilter);

        initIsotope.arrange({
          filter: selectedFilter
        });
      });
    });
  });

  let initIsotope;
  const isotopeLayout = document.querySelector('.isotope-layout');
  
  if (isotopeLayout) {
    imagesLoaded(isotopeLayout.querySelector('.isotope-container'), function() {
      if (!initIsotope) {
        initIsotope = new Isotope(isotopeLayout.querySelector('.isotope-container'), {
          itemSelector: '.isotope-item',
          layoutMode: 'masonry',
          filter: '*',
        });
      } else {
        initIsotope.arrange();
      }
    });
  }

  return () => {
    if (initIsotope) initIsotope.destroy();  // Clean up to avoid memory leaks
  };
}, [portfolioItems]);


  useEffect(() => {
    function initSwiper() {
      document.querySelectorAll(".init-swiper").forEach(function(swiperElement) {
        let config = JSON.parse(
          swiperElement.querySelector(".swiper-config").innerHTML.trim()
        );

        if (swiperElement.classList.contains("swiper-tab")) {
          initSwiperWithCustomPagination(swiperElement, config);
        } else {
          new Swiper(swiperElement, config);
        }
      });
    }

    // Call initSwiper when the component mounts
    initSwiper();
  }, []);




  useEffect(() => {
    const lightbox = GLightbox({
      selector: '.glightbox'
    });
  
    return () => {
      lightbox.destroy();
    };
  }, [portfolioItems]);







// ---------------- Array of portfolio items -----------------------------------------------------------
// ---------------- Array of portfolio items -----------------------------------------------------------
// ---------------- Array of portfolio items ----------------------------------------------------------- 





const handleShopItem = (itemName) => {
  return () => {
    const phoneNumber = "+25771126865";
    const message = `How much is this sir?  "${itemName}"`;
    const whatsappUrl = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };
};













// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------
// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------
// ------------------- FETCHING PRODUCTS FROM THE DATABASE -------------------------------------------------------



useEffect(() => {
  const fetchData = async () => {
    setMainpreloader(true);
    try {
      const response = await fetch(`https://gakwandi-project.glitch.me/api/admindisplay?category=${activeButton}`);
      const data = await response.json();
      if (response.ok) {
        const formattedData = data.map(item => ({
          title: item.name,
          category: `filter-${item.category}`,
          image: item.image,
          quantity: item.quantity,
          gallery: `portfolio-gallery-${item.category.toLowerCase()}`,
          available: item.quantity > 0 ? 'Available' : 'Unavailable!'
        }));
        setPortfolioItems(formattedData);
      } else {
        alert(`Failed to fetch from the store.`);
      }
    } catch (error) {
      console.error('Error fetching products:', error);
    } finally {
      setMainpreloader(false);
    }
  };
  fetchData();
}, [activeButton]);


const fetchItems = async (category = '') => {
  setMainpreloader(true);
  try {
    const url = category 
      ? `https://gakwandi-project.glitch.me/api/admindisplay?category=${category}` 
      : `https://gakwandi-project.glitch.me/api/admindisplay`;

    const response = await fetch(url);
    const data = await response.json();
    
    if (response.ok) {
      const formattedData = data.map(item => ({
        title: item.name,
        category: `filter-${item.category}`,
        image: item.image,
        quantity: item.quantity,
        gallery: `portfolio-gallery-${item.category.toLowerCase()}`,
        available: item.quantity > 0 ? 'Available' : 'Unavailable!'      }));
      setPortfolioItems(formattedData);
    } else {
      alert('Failed to fetch from the store.');
    }
  } catch (error) {
    console.error('Error fetching products:', error);
  } finally {
    setMainpreloader(false);
  }
};



const itemsRenderer = (
  <>
    {portfolioItems.map((item, index) => {
      return (
        <div key={index} className={`col-lg-4 col-md-6 portfolio-item isotope-item ${item.category}`}>
          <img src={item.image} className="img-fluid" alt={item.title} />
          <div className="portfolio-info">
            <h4>{item.title}</h4>
            <p className={item.available === 'Available' ? 'available' : 'unavailable'}>{item.available}</p>
            <a onClick={handleShopItem(item.title)} title={t('shop_now')} className="details-link">
              <i className="cart-icon bi bi-whatsapp"></i>
            </a>
          </div>
        </div>
      );
    })}
  </>
);










  return (
    <section id="portfolio" className="portfolio section">
      <div className="container section-title" data-aos="fade-up">
      <h2>{t('portfolio_p')}</h2>
      <p>{t('our_products')}</p>
      </div>

      <div className="container">

        <div className="isotope-layout" data-default-filter="*" data-layout="masonry" data-sort="original-order">

          <ul className="portfolio-filters isotope-filters" data-aos="fade-up" data-aos-delay="100">
            <li data-filter="*" onClick={() => fetchItems()} className="filter-active">{t('all')}</li>
            <li data-filter=".filter-app" onClick={() => fetchItems('Furniture')}>{t('furniture')}</li>
            <li data-filter=".filter-product" onClick={() => fetchItems('Electronics')}>{t('electronics')}</li>
          </ul>

          <div className="items-container row gy-4 isotope-container" data-aos="fade-up" data-aos-delay="200">
            {mainpreloader ? <div className="load-div">Loading ...</div> : portfolioItems.length === 0 ? 'Not Found' : itemsRenderer}
          </div>

        </div>

      </div>

    </section>
  );
}

export default Part6;
