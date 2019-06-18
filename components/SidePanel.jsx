import React from "react";
import Link from "next/link";

class SidePanel extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     // activeIndex: null
    };
  }

  render() {
    return (
      <div className="panel">
        <ul className="panel-ul">
          {this.props.panelTitle1 != null && (
            <li
              className={
                this.props.activeIndex === 0
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage1 != null && (
                <img className="panel-image" src={this.props.panelImage1} />
              )}
              <h3 className="panel-title">{this.props.panelTitle1}</h3>
              <p>{this.props.p1}</p>
            </li>
          )}

          {this.props.panelTitle2 != null && (
            <li
              className={
                this.props.activeIndex === 1
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage2 != null && (
                <img className="panel-image" src={this.props.panelImage2} />
              )}
              <h3 className="panel-title">{this.props.panelTitle2}</h3>
              <p>{this.props.p2}</p>
            </li>
          )}
          {this.props.panelTitle3 != null && (
            <li
              className={
                this.props.activeIndex === 2
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage3 != null && (
                <img className="panel-image" src={this.props.panelImage3} />
              )}
              <h3 className="panel-title">{this.props.panelTitle3}</h3>
              <p>{this.props.p3}</p>
            </li>
          )}
          {this.props.panelTitle4 != null && (
            <li
              className={
                this.props.activeIndex === 3
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage4 != null && (
                <img className="panel-image" src={this.props.panelImage4} />
              )}
              <h3 className="panel-title">{this.props.panelTitle4}</h3>
              <p>{this.props.p4}</p>
            </li>
          )}
          {this.props.panelTitle5 != null && (
            <li
              className={
                this.props.activeIndex === 4
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage5 != null && (
                <img className="panel-image" src={this.props.panelImage5} />
              )}
              <h3 className="panel-title">{this.props.panelTitle5}</h3>
              <p>{this.props.p5}</p>
            </li>
          )}
          {this.props.panelTitle6 != null && (
            <li
              className={
                this.props.activeIndex === 5
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage6 != null && (
                <img className="panel-image" src={this.props.panelImage6} />
              )}
              <h3 className="panel-title">{this.props.panelTitle6}</h3>
              <p>{this.props.p6}</p>
            </li>
          )}
          {this.props.panelTitle7 != null && (
            <li
              className={
                this.props.activeIndex === 6
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage7 != null && (
                <img className="panel-image" src={this.props.panelImage7} />
              )}
              <h3 className="panel-title">{this.props.panelTitle7}</h3>
              <p>{this.props.p7}</p>
            </li>
          )}
           {this.props.panelTitle8 != null && (
            <li
              className={
                this.props.activeIndex === 7
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage8 != null && (
                <img className="panel-image" src={this.props.panelImage8} />
              )}
              <h3 className="panel-title">{this.props.panelTitle8}</h3>
              <p>{this.props.p8}</p>
            </li>
          )}
          {this.props.panelTitle9 != null && (
            <li
              className={
                this.props.activeIndex === 8
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage9 != null && (
                <img className="panel-image" src={this.props.panelImage9} />
              )}
              <h3 className="panel-title">{this.props.panelTitle9}</h3>
              <p>{this.props.p9}</p>
            </li>
          )}
          {this.props.panelTitle10 != null && (
            <li
              className={
                this.props.activeIndex === 9
                  ? "panel-item-active"
                  : "hide"
              }
            >
              {this.props.panelImage10 != null && (
                <img className="panel-image" src={this.props.panelImage10} />
              )}
              <h3 className="panel-title">{this.props.panelTitle10}</h3>
              <p>{this.props.p10}</p>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default SidePanel;
