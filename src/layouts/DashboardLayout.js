import React, { useContext } from 'react';
import toast from 'react-hot-toast';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider/AuthProvider';
import useAdmin from '../hooks/useAdmin';
import useBuyer from '../hooks/useBuyer';
import useSeller from '../hooks/useSeller';

const DashboardLayout = () => {
    const { user, logout } = useContext(AuthContext);
    const [isAdmin] = useAdmin(user?.email);
    const [isSeller] = useSeller(user?.email);
    const [isBuyer] = useBuyer(user?.email);

    const navigate = useNavigate();

    // handle log out for logging out a user from the website
    const handleLogout = () => {
        logout()
            .then(() => {
                toast.success("Logout Successful");
                navigate('/');
            })
            .catch(err => console.error(err))
    }

    return (
        <div>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col ml-10 mt-16">
                    <Outlet></Outlet>
                    <label htmlFor="dashboard-drawer" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

                </div>
                <div className="drawer-side">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <div className="flex flex-col h-full p-3 w-60 bg-gray-50 text-gray-800">
                        <div className="space-y-3">
                            <div className="flex items-center justify-between">
                                <h2>Dashboard</h2>
                                <button className="p-2">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-800">
                                        <rect width="352" height="32" x="80" y="96"></rect>
                                        <rect width="352" height="32" x="80" y="240"></rect>
                                        <rect width="352" height="32" x="80" y="384"></rect>
                                    </svg>
                                </button>
                            </div>
                            <div className="flex-1">
                                <ul className="pt-2 pb-4 space-y-1 text-sm">
                                    <li className="rounded-sm">
                                        <Link to='/home' rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                                                <path d="M469.666,216.45,271.078,33.749a34,34,0,0,0-47.062.98L41.373,217.373,32,226.745V496H208V328h96V496H480V225.958ZM248.038,56.771c.282,0,.108.061-.013.18C247.9,56.832,247.756,56.771,248.038,56.771ZM448,464H336V328a32,32,0,0,0-32-32H208a32,32,0,0,0-32,32V464H64V240L248.038,57.356c.013-.012.014-.023.024-.035L448,240Z"></path>
                                            </svg>
                                            <span>Home</span>
                                        </Link>
                                    </li>
                                    {/* if user role is admin then following route will show */}
                                    {
                                        (user?.email && isAdmin) &&
                                        <>
                                            <li className="rounded-sm">
                                                <Link to='/dashboard/admin/allSellers' className="flex items-center p-2 space-x-3 rounded-md">
                                                    All Sellers
                                                </Link>
                                            </li>
                                            <li className="rounded-sm">
                                                <Link to='/dashboard/admin/allBuyers' className="flex items-center p-2 space-x-3 rounded-md">
                                                    All Buyers
                                                </Link>
                                            </li>
                                            <li className="rounded-sm">
                                                <Link className="flex items-center p-2 space-x-3 rounded-md">
                                                    Reported Items
                                                </Link>
                                            </li>
                                        </>
                                    }
                                    {
                                        (user?.email && isSeller) &&
                                        <>
                                            <li className="rounded-sm">
                                                <Link to='/dashboard/seller/addProduct'>Add Product</Link>
                                            </li>
                                            <li className="rounded-sm">
                                                <Link to='/dashboard/seller/myProducts'>My Products</Link>
                                            </li>
                                            <li className="rounded-sm">
                                                <Link to='/myBuyers'>My Buyers</Link>
                                            </li>
                                        </>
                                    }
                                    {
                                        (user?.email && isBuyer) &&
                                        <>
                                            <li className="rounded-sm">
                                                <Link to='/dashboard/buyer/myOrders'>My Orders</Link>
                                            </li>
                                            <li className="rounded-sm">
                                                <Link to='/myWishlist'>My Wishlist</Link>
                                            </li>
                                        </>
                                    }
                                    <li className="rounded-sm">
                                        <Link rel="noopener noreferrer" href="#" className="flex items-center p-2 space-x-3 rounded-md">
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="w-5 h-5 fill-current text-gray-600">
                                                <path d="M440,424V88H352V13.005L88,58.522V424H16v32h86.9L352,490.358V120h56V456h88V424ZM320,453.642,120,426.056V85.478L320,51Z"></path>
                                                <rect width="32" height="64" x="256" y="232"></rect>
                                            </svg>
                                            <span onClick={handleLogout}>Logout</span>
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="flex items-center p-2 mt-12 space-x-4 justify-self-end">
                            <img src={user?.photoURL} alt="" className="w-12 h-12 rounded-lg bg-gray-500" />
                            <div>
                                <h2 className="text-md font-semibold">
                                    {user?.displayName || user?.email}
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;