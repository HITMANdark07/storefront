import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "./App.css";

import PrivateRoute from './auth/PrivateRoute';
// import AdminRoute from './auth/AdminRoute';
import Homepage from "./pages/homepage/homepage";
import Signup from "./pages/signup/signup";
import Login from "./pages/login/login";
import ProfilePage from "./pages/profile/profile";
import Cart from './pages/cartPage/cart';
import Wish from './pages/wishPage/wishPage';
import Store from './pages/store/store';
import SubCategoryPage from './pages/subCategory/subCategory';
import Referal from './pages/referal/referal';
import Order from './pages/orders/order';
import Offer from './pages/Offer/Offer';
// import AdminDashboard from './pages/AdminDashboard';
// import UpdateUsers from './pages/UpdateUsers';
// import ManageUserPage from './pages/ManageUserPage';
// import AddPlan from './Admin/AddPlan';
// import ManagePlan from './Admin/ManagePlan';
// import UpdatePlan from './Admin/UpdatePlan';
// import Cart from './components/Cart/Cart';
// import ManageOrder from './pages/ManageOrders';

function App() {
  return (
    <BrowserRouter>
    <Switch>
      <Route path="/" exact component={Homepage} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/login" exact component={Login} />
      <PrivateRoute path="/profile" exact component={ProfilePage} />
      <PrivateRoute path="/cart" exact component={Cart} />
      <PrivateRoute path="/whishlist" exact component={Wish} />
      <PrivateRoute path="/store" exact component={Store} />
      <Route path="/subcategory/:categoryId" exact component={SubCategoryPage} />
      <PrivateRoute path="/referals" exact component={Referal} />
      <PrivateRoute path="/orders" exact component={Order} />
      <PrivateRoute path="/offers" exact component={Offer} />
      {/* <Route path="/plans" exact component={Plans} />
      <Route path="/login" exact component={LoginPage} />
      <Route path="/signup" exact component={SignupPage} />
      <PrivateRoute path="/user/dashboard" exact component={UserDashboard} />
      <AdminRoute path="/admin/dashboard" exact component={AdminDashboard} />
      <AdminRoute path="/update/users" exact component={UpdateUsers} />
      <AdminRoute path="/user/update/:userId" exact component={ManageUserPage} />
      <AdminRoute path="/create/plans" exact component={AddPlan} />
      <AdminRoute path="/admin/plans" exact component={ManagePlan} />
      <AdminRoute path="/admin/plan/update/:planId" exact component={UpdatePlan} />
      <PrivateRoute path="/user/cart" exact component={Cart} />
      <AdminRoute path="/admin/orders" exact component={ManageOrder} /> */}
    </Switch>
    </BrowserRouter>
  );
}

export default App;
