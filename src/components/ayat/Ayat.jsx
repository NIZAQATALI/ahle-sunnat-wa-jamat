import React from 'react';
import './ayat.css'; 

export default function Ayat() {
  return (
    <div>
         <div className="new-component-grid">
         <div className="left-column">
          <div className="hadith">
            <h4>Hadith of the Day</h4>
            {/* Content for the Hadith */}
          </div>
          <div className="ayat">
            <p>اَنَا اَعْرَبُكُمْ، اَنَا قُرَشِیٌّ، وَاسْتُرْضِعْتُ<br/> فِی بَنِی سَعْدِ بْنِ بَكْرٍ</p>
            {/* Content for the Arabic Ayat and its English translation */}
          </div>
          <div className="translation">
            <p>‘I am more eloquent than all of you; I am Qurayshi and I was nursed in Banu Sa’d,’</p>
            {/* Content for the Arabic Ayat and its English translation */}
          </div>
          <div className="reference">
            <h6>Seerat-e-Ibn-e-Hishaam, p. 68</h6>
            {/* Content for the Reference */}
          </div>
        </div>
      <div className="right-column">
      <div className="hadith-right">
            <h4>Ayat of the Day</h4>
            {/* Content for the Hadith */}
          </div>
          <div className="ayat-right">
            <p>وَ مَاۤ اَرْسَلْنٰكَ اِلَّا رَحْمَةً لِّلْعٰلَمِیْنَ</p>
            {/* Content for the Arabic Ayat and its English translation */}
          </div>
          <div className="translation-right">
            <p>Translation Kanz-ul-Iman: And We did not send you (O Beloved) but as mercy for all the worlds.</p>
            {/* Content for the Arabic Ayat and its English translation */}
          </div>
          <div className="reference-right">
            <h6>Surah Al Anbiya, Ayat 107</h6>
            {/* Content for the Reference */}
          </div>
      </div>
    </div>
    </div>
  )
}
