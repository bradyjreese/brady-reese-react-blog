import React from 'react';
import { CategoryRow } from '../blog';

export default function BlogDetail (props) {
    const {
        author,
        categories, 
        date, 
        description,
        image,
        title
    } = props.location.state.post;
    const imageStyle = {
        background: `url("${require(`../../../static/assets/images/${image}`)}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100%',
        height: '30vh',
        marginTop: '-15px'
    }
    
    return (
        <div className='blog-detail-wraper'>
            <section className='blog-detail-image-wrapper' style={imageStyle}>
                <div className='left-side'>
                    <div className='date-wrapper'>
                        {date}
                    </div>
                </div>
                <div className='right-side'>
                    <CategoryRow tags={categories} />
                </div>
            </section>
            <section className='blog-writings-wrapper'>
                <div className='blog-title'>
                    {title}
                </div>
                <div className='blog-author'>
                    <p>{author}</p>
                </div>
                <div className='blog-description'>
                    {description}
                </div>
                <div className='blog-article'>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Viverra vitae congue eu consequat ac. Nisi est sit amet facilisis magna etiam. In pellentesque massa placerat duis ultricies lacus sed turpis. Velit egestas dui id ornare arcu odio ut sem. Nisi porta lorem mollis aliquam ut porttitor leo a. Purus gravida quis blandit turpis cursus in hac habitasse platea. Arcu dui vivamus arcu felis bibendum ut tristique et. Condimentum vitae sapien pellentesque habitant morbi. Scelerisque fermentum dui faucibus in. Diam volutpat commodo sed egestas egestas fringilla phasellus. Eu ultrices vitae auctor eu augue. Neque vitae tempus quam pellentesque nec nam. Adipiscing at in tellus integer feugiat scelerisque. Vel quam elementum pulvinar etiam non quam. Auctor eu augue ut lectus arcu bibendum at. Faucibus purus in massa tempor nec feugiat nisl pretium. Tincidunt id aliquet risus feugiat in. Proin fermentum leo vel orci.
                    </p>
                    <p>
                        Elementum nibh tellus molestie nunc non blandit massa enim nec. Integer quis auctor elit sed vulputate. Augue interdum velit euismod in pellentesque massa. Nunc aliquet bibendum enim facilisis. Nisi scelerisque eu ultrices vitae. Feugiat in ante metus dictum at. Feugiat nisl pretium fusce id velit ut. Volutpat lacus laoreet non curabitur gravida arcu ac. Dignissim sodales ut eu sem integer vitae justo eget magna. Sed augue lacus viverra vitae congue.
                    </p>
                    <p>
                        Scelerisque in dictum non consectetur a erat nam at lectus. Id cursus metus aliquam eleifend. Eros in cursus turpis massa tincidunt dui ut. Nibh praesent tristique magna sit amet. Vulputate mi sit amet mauris commodo. Posuere lorem ipsum dolor sit amet consectetur adipiscing. Varius quam quisque id diam. Feugiat nisl pretium fusce id velit ut tortor. Adipiscing at in tellus integer feugiat scelerisque. Aenean pharetra magna ac placerat vestibulum lectus mauris ultrices eros. Morbi non arcu risus quis varius quam quisque. Tellus at urna condimentum mattis pellentesque id nibh tortor. Ut placerat orci nulla pellentesque. Potenti nullam ac tortor vitae purus. Porttitor leo a diam sollicitudin tempor id. Amet aliquam id diam maecenas ultricies mi. Sed elementum tempus egestas sed sed risus pretium quam. Metus dictum at tempor commodo ullamcorper a. Venenatis urna cursus eget nunc scelerisque viverra.
                    </p>
                    <p>
                        Et molestie ac feugiat sed lectus. Maecenas volutpat blandit aliquam etiam erat velit scelerisque. Interdum velit euismod in pellentesque massa placerat duis. Dignissim cras tincidunt lobortis feugiat vivamus at. Rhoncus aenean vel elit scelerisque mauris pellentesque pulvinar pellentesque. Urna porttitor rhoncus dolor purus non enim praesent. Lectus arcu bibendum at varius vel pharetra vel turpis. Sit amet justo donec enim diam. Semper feugiat nibh sed pulvinar proin. Turpis egestas maecenas pharetra convallis. Mi sit amet mauris commodo. Tempus imperdiet nulla malesuada pellentesque elit eget gravida cum. Massa tempor nec feugiat nisl pretium. Varius sit amet mattis vulputate enim. Penatibus et magnis dis parturient montes nascetur ridiculus. Massa tincidunt nunc pulvinar sapien et ligula. Adipiscing bibendum est ultricies integer quis auctor.
                    </p>
                </div>
            </section>
        </div>
    )
}