import wixData from 'wix-data';

function getData(){
    let query = wixData.query('Comments');

    return query.limit(1000).find().then(results => {
        console.log('getData',results);
        return results.items;
    });
}

$w.onReady(()=> {

    $w("#commentswrite").onAfterSave( () => {
        getData().then((items) => {
            $w("#commentslist").data = items;
        });
    });
});