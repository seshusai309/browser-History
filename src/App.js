import './App.css'
import {Component} from 'react'

// These are the list used in the application. You can move them to any component needed.
const initialHistoryList = [
  {
    id: 0,
    timeAccessed: '07:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/instagram-img.png',
    title: 'Instagram',
    domainUrl: 'instagram.com',
  },
  {
    id: 1,
    timeAccessed: '05:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/twitter-img.png',
    title: 'Twitter. It’s what’s happening / Twitter',
    domainUrl: 'twitter.com',
  },
  {
    id: 2,
    timeAccessed: '04:35 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/facebook-img.png',
    title: 'Facebook – log in or sign up',
    domainUrl: 'facebook.com',
  },
  {
    id: 3,
    timeAccessed: '04:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/linkedin-img.png',
    title: 'LinkedIn: Log In or Sign Up',
    domainUrl: 'linkedin.com',
  },
  {
    id: 4,
    timeAccessed: '04:00 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/hashnode-img.png',
    title: 'Hashnode: Everything you need to start blogging as a developer!',
    domainUrl: 'hashnode.com',
  },
  {
    id: 5,
    timeAccessed: '03:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/github-img.png',
    title: 'GitHub: Where the world builds software · GitHub',
    domainUrl: 'github.com',
  },

  {
    id: 6,
    timeAccessed: '02:45 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/react-img.png',
    title: 'React – A JavaScript library for building user interfaces',
    domainUrl: 'reactjs.org',
  },
  {
    id: 7,
    timeAccessed: '01:25 PM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/stackoverflow-img.png',
    title: 'Stack Overflow - Where Developers Learn, Share, & Build Careers',
    domainUrl: 'stackoverflow.com',
  },

  {
    id: 8,
    timeAccessed: '09:25 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/gmail-img.png',
    title: 'Gmail',
    domainUrl: 'mail.google.com',
  },
  {
    id: 9,
    timeAccessed: '09:00 AM',
    logoUrl: 'https://assets.ccbp.in/frontend/react-js/google-img.png',
    title: 'Google',
    domainUrl: 'google.com',
  },
]

const DeleteItem = props => {
  const {eachitem, func} = props
  const {id, timeAccessed, logoUrl, title, domainUrl} = eachitem
  console.log(timeAccessed)

  const clickedDelete = () => {
    func(id)
  }

  return (
    <li className="DeleteItem">
      <p className="delete-para">{timeAccessed}</p>
      <div className="deleteItemName">
        <img className="icon" alt="domain logo" src={logoUrl} />
        <div className="tata">
          <p className="delete-para2">{title}</p>
          <p className="delet-para2">{domainUrl}</p>
        </div>
      </div>

      <button data-testid="delete" type="button" className="delete-img">
        <img
          onClick={clickedDelete}
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/delete-img.png "
        />
      </button>
    </li>
  )
}

class App extends Component {
  state = {value: initialHistoryList}

  deletingItems = event => {
    this.setState({
      value: initialHistoryList.filter(ses =>
        ses.title.toLowerCase().includes(event.target.value.toLowerCase()),
      ),
    })
  }

  dynamicdelete = id => {
    this.setState(ros => {
      const result = ros.value.filter(each => each.id !== id)
      return {
        value: result,
      }
    })
  }

  render() {
    const {value} = this.state
    let reso = false
    if (value.length === 0) {
      reso = true
    } else {
      reso = false
    }
    return (
      <div>
        <div className="headerSection">
          <img
            className="img-logo"
            src="https://assets.ccbp.in/frontend/react-js/history-website-logo-img.png"
            alt="app logo"
          />

          <div className="seachBtnInput">
            <button className="btn" type="button">
              <img
                alt="search"
                src="https://assets.ccbp.in/frontend/react-js/search-img.png"
              />
            </button>
            <input
              onChange={this.deletingItems}
              className="inputSearch"
              type="search"
              placeholder="Search History"
            />
          </div>
        </div>
        {reso && (
          <div className="noHistory-head">
            <p>There is no history to show</p>
          </div>
        )}

        {!reso && (
          <ul className="middleSection">
            {value.map(each => (
              <DeleteItem
                func={this.dynamicdelete}
                key={each.id}
                eachitem={each}
              />
            ))}
          </ul>
        )}
      </div>
    )
  }
}

export default App
