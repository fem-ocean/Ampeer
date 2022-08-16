import Header from "./Components/Header";
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import Home from "./Components/Home";
import PropertyInfo from "./Components/PropertyInfo";

function App(props) {
  
  const Property = {
    'forrent': {
      'shared': [{
        'id': 1,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Lekki Phase 1, Lekki',
        'price': 500000,
        'videoext': '../Assets/IMG_6679.MOV compressed.mov',
        'videoint': '../Assets/IMG_6684.MOV',
        'videocomp': '../Assets/IMG_6676.MOV',
        },
        {'id': 2,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Oniru, Lekki',
        'price': 600000,
        'videoext': '../Assets/AmpeerVidComp.mp4',
        'videoint': '../Assets/AmpeerVidComp.mp4',
        'videocomp': '../Assets/AmpeerVidComp.mp4',
        },
        {'id': 3,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Salem, Lekki',
        'price': 700000,
        'videoext': '../Assets/IMG_6968.MOV',
        'videoint': '../Assets/IMG_6968.MOV',
        'videocomp': '../Assets/IMG_6968.MOV',
        },
        {'id': 4,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Ikota, Lekki',
        'price': 600000,
        'videoext': '../Assets/IMG_6967.MOV',
        'videoint': '../Assets/IMG_6967.MOV',
        'videocomp': '../Assets/IMG_6967.MOV',
      }],

      '1bed':[{
        'id': 1,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Lekki Phase 1, Lekki',
        'price': 800000,
        'videoext': '../Assets/IMG_7058.MOV',
        'videoint': '../Assets/IMG_7058.MOV',
        'videocomp': '../Assets/IMG_7058.MOV',
        },
        {'id': 2,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Oniru, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_7060.MOV',
        'videoint': '../Assets/IMG_7060.MOV',
        'videocomp': '../Assets/IMG_7060.MOV',
        },
        {'id': 3,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Salem, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_7063.MOV',
        'videoint': '../Assets/IMG_7063.MOV',
        'videocomp': '../Assets/IMG_7063.MOV',
        },
        {'id': 4,
        'desc': '1 Bedroom Flat FOR RENT',
        'add': 'Ikota, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_7064.MOV',
        'videoint': '../Assets/IMG_7064.MOV',
        'videocomp': '../Assets/IMG_7064.MOV',
      }],

      '2bed':[{
        'id': 1,
        'desc': '2 Bedroom Flat FOR RENT',
        'add': 'Salem, Lekki',
        'price': 800000,
        'videoext': '../Assets/IMG_6909.MOV',
        'videoint': '../Assets/IMG_6909.MOV',
        'videocomp': '../Assets/IMG_6909.MOV',
        },
        {'id': 2,
        'desc': '2 Bedroom Flat FOR RENT',
        'add': 'Ologolo, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_6684.MOV',
        'videoint': '../Assets/IMG_6684.MOV',
        'videocomp': '../Assets/IMG_6684.MOV',
        },
        {'id': 3,
        'desc': '2 Bedroom Flat FOR RENT',
        'add': 'Newroad, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_7039.MOV',
        'videoint': '../Assets/IMG_7039.MOV',
        'videocomp': '../Assets/IMG_7039.MOV',
        },
        {'id': 4,
        'desc': '2 Bedroom Flat FOR RENT',
        'add': 'Chevron, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_6822.MOV',
        'videoint': '../Assets/IMG_6822.MOV',
        'videocomp': '../Assets/IMG_6822.MOV',
      }],

      '3bed':[{
        'id': 1,
        'desc': '3 Bedroom Flat FOR RENT',
        'add': 'Salem, Lekki',
        'price': 800000,
        'videoext': '../Assets/IMG_6825.MOV',
        'videoint': '../Assets/IMG_6825.MOV',
        'videocomp': '../Assets/IMG_6825.MOV',
        },
        {'id': 2,
        'desc': '3 Bedroom Flat FOR RENT',
        'add': 'Ologolo, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_6826.MOV',
        'videoint': '../Assets/IMG_6826.MOV',
        'videocomp': '../Assets/IMG_6826.MOV',
        },
        {'id': 3,
        'desc': '3 Bedroom Flat FOR RENT',
        'add': 'Newroad, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_6684.MOV',
        'videoint': '../Assets/IMG_6684.MOV',
        'videocomp': '../Assets/IMG_6684.MOV',
        },
        {'id': 4,
        'desc': '3 Bedroom Flat FOR RENT',
        'add': 'Chevron, Lekki',
        'price': 1500000,
        'videoext': '../Assets/AmpeerVidComp.mp4',
        'videoint': '../Assets/AmpeerVidComp.mp4',
        'videocomp': '../Assets/AmpeerVidComp.mp4',
      }],

      '4bed':[{
        'id': 1,
        'desc': '4 Bedroom Flat FOR RENT',
        'add': 'Ikota, Lekki',
        'price': 1500000,
        'videoext': '../Assets/IMG_6968.MOV',
        'videoint': '../Assets/IMG_6968.MOV',
        'videocomp': '../Assets/IMG_6968.MOV',
        },
        {'id': 2,
        'desc': '4 Bedroom Flat FOR RENT',
        'add': 'Ologolo, Lekki',
        'price': 3000000,
        'videoext': '../Assets/IMG_6967.MOV',
        'videoint': '../Assets/IMG_6967.MOV',
        'videocomp': '../Assets/IMG_6967.MOV',
        },
        {'id': 3,
        'desc': '4 Bedroom Flat FOR RENT',
        'add': 'Newroad, Lekki',
        'price': 5000000,
        'videoext': '../Assets/IMG_7058.MOV',
        'videoint': '../Assets/IMG_7058.MOV',
        'videocomp': '../Assets/IMG_7058.MOV',
        },
        {'id': 4,
        'desc': '4 Bedroom Flat FOR RENT',
        'add': 'Chevron, Lekki',
        'price': 5500000,
        'videoext': '../Assets/IMG_7060.MOV',
        'videoint': '../Assets/IMG_7060.MOV',
        'videocomp': '../Assets/IMG_7060.MOV',
      }]

    },

    'forshortlet': {
      'shared': [{
        'id': 1,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Lekki Phase 1, Lekki',
        'price': 500000,
        'videoext': '../Assets/IMG_7063.MOV',
        'videoint': '../Assets/IMG_7063.MOV',
        'videocomp': '../Assets/IMG_7063.MOV',
        },
        {'id': 2,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Oniru, Lekki',
        'price': 600000,
        'videoext': '../Assets/IMG_7064.MOV',
        'videoint': '../Assets/IMG_7064.MOV',
        'videocomp': '../Assets/IMG_7064.MOV',
        },
        {'id': 3,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Salem, Lekki',
        'price': 700000,
        'videoext': '../Assets/IMG_6909.MOV',
        'videoint': '../Assets/IMG_6909.MOV',
        'videocomp': '../Assets/IMG_6909.MOV',
        },
        {'id': 4,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Ikota, Lekki',
        'price': 600000,
        'videoext': '../Assets/IMG_6684.MOV',
        'videoint': '../Assets/IMG_6684.MOV',
        'videocomp': '../Assets/IMG_6684.MOV',
      }],

      '1bed':[{
        'id': 1,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Lekki Phase 1, Lekki',
        'price': 800000,
        'videoext': '../Assets/AmpeerVidComp.mp4',
        'videoint': '../Assets/AmpeerVidComp.mp4',
        'videocomp': '../Assets/AmpeerVidComp.mp4',
        },
        {'id': 2,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Oniru, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_6968.MOV',
        'videoint': '../Assets/IMG_6968.MOV',
        'videocomp': '../Assets/IMG_6968.MOV',
        },
        {'id': 3,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Salem, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_6967.MOV',
        'videoint': '../Assets/IMG_6967.MOV',
        'videocomp': '../Assets/IMG_6967.MOV',
        },
        {'id': 4,
        'desc': '1 Bedroom Flat FOR SHORTLET',
        'add': 'Ikota, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_7058.MOV',
        'videoint': '../Assets/IMG_7058.MOV',
        'videocomp': '../Assets/IMG_7058.MOV',
      }],

      '2bed':[{
        'id': 1,
        'desc': '2 Bedroom Flat FOR SHORTLET',
        'add': 'Salem, Lekki',
        'price': 800000,
        'videoext': '../Assets/IMG_7060.MOV',
        'videoint': '../Assets/IMG_7060.MOV',
        'videocomp': '../Assets/IMG_7060.MOV',
        },
        {'id': 2,
        'desc': '2 Bedroom Flat FOR SHORTLET',
        'add': 'Ologolo, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_7063.MOV',
        'videoint': '../Assets/IMG_7063.MOV',
        'videocomp': '../Assets/IMG_7063.MOV',
        },
        {'id': 3,
        'desc': '2 Bedroom Flat FOR SHORTLET',
        'add': 'Newroad, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_7064.MOV',
        'videoint': '../Assets/IMG_7064.MOV',
        'videocomp': '../Assets/IMG_7064.MOV',
        },
        {'id': 4,
        'desc': '2 Bedroom Flat FOR SHORTLET',
        'add': 'Chevron, Lekki',
        'price': 900000,
        'videoext': '../Assets/IMG_6909.MOV',
        'videoint': '../Assets/IMG_6909.MOV',
        'videocomp': '../Assets/IMG_6909.MOV',
      }],

      '3bed':[{
        'id': 1,
        'desc': '3 Bedroom Flat FOR SHORTLET',
        'add': 'Salem, Lekki',
        'price': 800000,
        'videoext': '../Assets/IMG_6684.MOV',
        'videoint': '../Assets/IMG_6684.MOV',
        'videocomp': '../Assets/IMG_6684.MOV',
        },
        {'id': 2,
        'desc': '3 Bedroom Flat FOR SHORTLET',
        'add': 'Ologolo, Lekki',
        'price': 900000,
        'videoext': '../Assets/AmpeerVidComp.mp4',
        'videoint': '../Assets/AmpeerVidComp.mp4',
        'videocomp': '../Assets/AmpeerVidComp.mp4',
        },
        {'id': 3,
        'desc': '3 Bedroom Flat FOR SHORTLET',
        'add': 'Newroad, Lekki',
        'price': 1000000,
        'videoext': '../Assets/IMG_6968.MOV',
        'videoint': '../Assets/IMG_6968.MOV',
        'videocomp': '../Assets/IMG_6968.MOV',
        },
        {'id': 4,
        'desc': '3 Bedroom Flat FOR SHORTLET',
        'add': 'Chevron, Lekki',
        'price': 1500000,
        'videoext': '../Assets/IMG_6967.MOV',
        'videoint': '../Assets/IMG_6967.MOV',
        'videocomp': '../Assets/IMG_6967.MOV',
      }],

      '4bed':[{
        'id': 1,
        'desc': '4 Bedroom Flat FOR SHORTLET',
        'add': 'Ikota, Lekki',
        'price': 1500000,
        'videoext': '../Assets/IMG_7058.MOV',
        'videoint': '../Assets/IMG_7058.MOV',
        'videocomp': '../Assets/IMG_7058.MOV',
        },
        {'id': 2,
        'desc': '4 Bedroom Flat FOR SHORTLET',
        'add': 'Ologolo, Lekki',
        'price': 3000000,
        'videoext': '../Assets/IMG_7060.MOV',
        'videoint': '../Assets/IMG_7060.MOV',
        'videocomp': '../Assets/IMG_7060.MOV',
        },
        {'id': 3,
        'desc': '4 Bedroom Flat FOR SHORTLET',
        'add': 'Newroad, Lekki',
        'price': 5000000,
        'videoext': '../Assets/IMG_7063.MOV',
        'videoint': '../Assets/IMG_7063.MOV',
        'videocomp': '../Assets/IMG_7063.MOV',
        },
        {'id': 4,
        'desc': '4 Bedroom Flat FOR SHORTLET',
        'add': 'Chevron, Lekki',
        'price': 5500000,
        'videoext': '../Assets/IMG_7064.MOV',
        'videoint': '../Assets/IMG_7064.MOV',
        'videocomp': '../Assets/IMG_7064.MOV',
      }]
      
    }
    
  
  }
  
  
  
  
  return (
    <Router>
        
        <div className="App">
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/info" element={<PropertyInfo />} /> 
          </Routes>

        </div>

    </Router>

      
    
  );
}

export default App;
