import React, { Component } from "react";
import $ from "jquery";

class Item extends Component {
  getSelectedItem() {
    let selectedItem =
      this.props.selectedItem === true
        ? { ...this.props.item, default: true }
        : this.props.item;
    this.props.getSelectedItemTabPane(selectedItem);
  }
  render() {
    $(document).ready(function () {
      $(".tab-pane.active .btn").click(function () {
        $(this).removeClass("btn-danger").addClass("btn-primary");
      });
    });
    return (
      <div className="col-lg-4 col-sm-12">
        <div className="thumbnail">
          <img src={this.props.item.imgSrc_jpg} alt={this.props.item.desc} />
          {this.props.item.desc}
          <div className="caption">
            <button
              className="softTry"
              onClick={this.getSelectedItem.bind(this)}
            >
              Try it
            </button>
          </div>
          <div className="caption">
            <button
              className="softCart"

              // onClick={this.getSelectedItem.bind(this)}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Item;
