import React from 'react';
import ApiContext from '../../ApiContext';
import FeedbackList from '../../components/FeedbackList/FeedbackList';
import BookWalkForm from '../../components/BookWalkForm/BookWalkForm';
import PhotoApiService from '../../services/photo-api-service'
import './WalkerPage.css'




class WalkerPage extends React.Component {
    static contextType = ApiContext;
    
    state = {
        photo_url: '',
        form_open: false
    }

    componentDidMount = () => {
        const { user_id } = this.props.match.params
        const { walkers } = this.context
        const selectWalker =  walkers.find(walker => walker.user_id == user_id)
        const photo = selectWalker.profile_photo


        photo ? 
        PhotoApiService.getImage(photo)
            .then(res => {
                
                this.setState({
                    photo_url: res.returnData.url
                })
                
            })
        : this.setState({
            photo_url: 'https://www.w3schools.com/howto/img_avatar.png'
        })

    }
    
    handleBackToSearch = (e) => {
        const { history } = this.props;
        history.push('/walker')
    }

    handleOpenForm = () => {
        this.setState({
            form_open: true
        })
    }

    handleCloseForm = () => {
        this.setState({
            form_open: false
        })
    }

    

    render() {
    const { walkers } = this.context
    const { user_id } = this.props.match.params
    const { photo_url } = this.state
   

    const selectWalker =  walkers.find(walker => walker.user_id == user_id)

    
  
        return (
            <section className="walker-page">
                <div className="return-to-list-button">
                    <button
                        type="button"
                        className="return-button"
                        onClick={e => this.handleBackToSearch(e)}>
                        Return to search
                    </button>
                </div>
                <div className="walker-image">
        
                    <img src={photo_url} alt="profile avatar" />
                </div>
                <div className="walker-blurb">
                    <h3>{selectWalker.first_name}</h3>
                    <p>{selectWalker.bio}</p>
                </div>
                <div className="form-open-button">
                    {!this.state.form_open &&
                    <button
                        onClick={this.handleOpenForm}>
                        Book with {selectWalker.first_name}
                    </button>}
                </div>
                <section className="book-walk-form">
                    {this.state.form_open &&
                    <BookWalkForm 
                        name={selectWalker.first_name}
                        id={selectWalker.user_id}
                        handleBackToSearch={this.handleBackToSearch}
                        />}
                </section>
                <div className="feedback-list">
                    <FeedbackList
                        id={selectWalker.user_id}
                        name={selectWalker.first_name}
                        />
                </div>
            </section>
            

        )
    }
}

export default WalkerPage;