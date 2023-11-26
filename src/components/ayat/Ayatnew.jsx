import React from 'react'
import './ayatnew.css'
export default function Ayatnew() {
  return (
    <>
   <div class="section-ten">
    <div class="container-fluid">
      <div class="row">
        <div class="col-lg-6 col-md-6 px-0  hadith-card">
          <div class=" d-flex flex-column justify-content-end align-items-end text-end eloquent">
            <button>Hadith Of The Day</button>
            <h5> ا اَعْرَبُكُمْ، اَنَا قُرَشِیٌّ، وَاسْتُرْضِعْتُ
              <br/> فِی بَنِی سَعْدِ بْنِ بَكْرٍ
            </h5>
            <p>‘I am more eloquent than all of you; I <br/> am Qurayshi and I was nursed in Banu Sa’d,’</p>
          </div>
          <div class=" seerat d-flex justify-content-center align-items-center text-center">
            <p>Seerat-e-Ibn-e-Hishaam, p. 68</p>
          </div>
        </div>
        <div class="col-lg-6 col-md-6  px-0  Ayat-card">
          <div class=" d-flex flex-column justify-content-start align-items-start text-start Kanz-ul-Iman">
            <button>Ayat Of The Day</button>
            <h5> اوَ مَاۤ اَرْسَلْنٰكَ اِلَّا رَحْمَةً لِّلْعٰلَمِیْنَ</h5>
            <p>Translation Kanz-ul-Iman: And We did not send you (O Beloved) but as mercy for all the worlds.</p>
          </div>
          <div class=" Surah d-flex justify-content-center align-items-center text-center">
            <p>Surah Al Anbiya, Ayat 107</p>
          </div>
        </div>
      </div>
    </div>
  </div>
    </>
  )
}
