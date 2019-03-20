import Head from "next/head"
import stylesheet from 'styles/main.scss'

import Header from './Header'
import Menu from './Menu'
import Contact from './Contact'
import Footer from './Footer'

class Layout extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isMenuVisible: false,
            loading: 'is-loading',
            isSubMenuVisible: false
        }
        this.handleToggleMenu = this.handleToggleMenu.bind(this)
        this.handleHoverMenu = this.handleHoverMenu.bind(this)
    }

    componentDidMount() {
        this.timeoutId = setTimeout(() => {
            this.setState({ loading: '' });
        }, 100);
    }

    componentWillUnmount() {
        if (this.timeoutId) {
            clearTimeout(this.timeoutId);
        }
    }

    handleToggleMenu() {
        this.setState({
            isMenuVisible: !this.state.isMenuVisible
        })
    }

    handleHoverMenu() {
        this.setState({
            isMenuVisible: !this.state.isSubMenuVisible
        })
    }

    render() {
        return (
            <div className={`body ${this.state.loading} ${this.state.isMenuVisible ? 'is-menu-visible' : ''}`}>
                <Head>
                    <title>Little Rock A.M.E. Zion</title>
                    <meta name="description" content="Little Rock A.M.E. Zion Church" />
                    <link href="/static/css/skel.css" rel="stylesheet" />
                    <link href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css" rel="stylesheet" />
                    <link href="https://fonts.googleapis.com/css?family=Source+Sans+Pro:300,300i,600,600i" rel="stylesheet" />
                    <link
                    rel="stylesheet"
                    href="https://maxcdn.bootstrapcdn.com/bootstrap/4.2.1/css/bootstrap.min.css"
                    integrity="sha384-GJzZqFGwb1QTTN6wy59ffF1BuGJpLSa9DkKMp0DgiMDm4iYMj70gZWKYbI706tWS"
                    crossorigin="anonymous"
                    />
                </Head>
                <style dangerouslySetInnerHTML={{ __html: stylesheet }} />

                <div id="wrapper">
                    <Header onToggleMenu={this.handleToggleMenu} />
                    {this.props.children}
                    <Footer />
                </div>
                <Menu onToggleMenu={this.handleToggleMenu} onHoverMenu={this.handleHoverMenu} />

            </div>
        )
    }
}

export default Layout
