import React, { useState } from 'react';

const Folder = ({ explorer }) => {
    const [expandFolder, setExpandedFolder] = useState(false)
    const [showInput, setShowInput] = useState({
        isFolder: false,
        visible: false,
    })

    const handleAddNewFolderFile = (e, isFolder) => {
        e.stopPropagation()
        setExpandedFolder(true)
        setShowInput({
            isFolder,
            visible: true
        })
    }
    return (
        <>
            {explorer.isFolder ? <div >
                <div style={{ display: "flex", justifyContent: "space-between", background: "#edd9d9" }}>
                    <span onClick={() => setExpandedFolder(!expandFolder)}>📁 {explorer.name}</span>
                    <div>
                        <button onClick={(e) => handleAddNewFolderFile(e, true)}>Folder +</button>
                        <button onClick={(e) => handleAddNewFolderFile(e, false)}>File +</button>
                    </div>
                </div>
                <div style={{ display: expandFolder ? "block" : "none", marginLeft: "1rem" }}>
                    {
                        showInput.visible &&
                        <div>
                            {showInput.isFolder ? "📁" : "📄"}
                            <input type="text" onBlur={() => setShowInput({
                                isFolder: false,
                                visible: false,
                            })} autoFocus />

                        </div>
                    }
                    {
                        explorer.items.map((item) => {
                            return <Folder explorer={item} key={item.id} />
                        })
                    }
                </div>

            </div> : <div>📄 {explorer.name}</div>}

        </>
    );
}

export default Folder;
