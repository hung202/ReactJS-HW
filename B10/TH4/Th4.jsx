import React from "react";
import '../../index.css'
export default function TH4() {

    return (
        <div className="p-4">
            <h1 className="text-blue-500 font-bold text-4xl">Login</h1>
            <form>
                <p className="mt-8">Nhập email:</p>
                <input
                    className="border rounded border-blue-600 h-9 w-full mt-2"
                    name="email"
                    type="text"
                />
                <p className="mt-4">Nhập password:</p>
                <input
                    className="border rounded border-blue-600 h-9 w-full mt-2"
                    name="password"
                    type="password"
                />
                <br />
                <label>
                    <input
                        className="mt-4"
                        name="isRead"
                        type="checkbox" /> I read and accept the privacy policy
                </label>
                <br />
                <button className="mt-8 h-9 border rounded w-40 bg-blue-400 text-white font-bold">
                    Submit nè
                </button>
            </form>
        </div>
    );
}
