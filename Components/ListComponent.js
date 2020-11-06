import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { SearchComponent, ItemComponent } from '../Components';

export default function ListComponent({ users, getUser, _getUser, singleUser }) {
    const [userlist, setuserlist] = useState([])
    const [refresh, setrefresh] = useState(false)

    useEffect(() => {
        if (users) {
            setuserlist(users)
        }
    }, [users])

    const filtered = (value) => {
        if (value) {
            const re = new RegExp(value, 'i');
            var filtered = users.filter(entry => Object.values(entry).some(val => typeof val === "string" && val.match(re)));
            setuserlist(filtered)
        } else {
            setuserlist(users)
        }
    }

    const handleRefresh = () => {
        _getUser()
    }

    return (
        <React.Fragment>
            <SearchComponent filtered={filtered} />
            <FlatList
                data={userlist && userlist}
                style={{ height: '90%' }}
                refreshing={refresh}
                onRefresh={handleRefresh}
                keyExtractor={(item) => item.id}
                renderItem={({ item, index }) => {
                    return (
                        <ItemComponent key={index} getUser={getUser} singleUser={singleUser} item={item} />
                    )
                }} />
        </React.Fragment>
    )

}