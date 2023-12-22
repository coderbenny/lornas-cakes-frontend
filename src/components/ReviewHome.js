import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom/cjs/react-router-dom.min";
import Reviews from "./Reviews";
import ReviewForm from "./ReviewForm";

function ReviewHome() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exach path="/reviews">
                        <Reviews />
                    </Route>
                    <Route path="/add-review">
                        <ReviewForm />
                    </Route>
                </Switch>
            </div>
        </Router>
    )
}

export default ReviewHome;