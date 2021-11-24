# To start the app:

npm i && npm run start

# Points to notice

## @material-ui

The particular create-react-app template I used did not come with a preprocessor set-up. For the sake of speeding my work, I chose to use `makeStyles()`, as it is what I am currently using professionally.

## External libraries

Apart from minor details such as `<Button/>` or `<Icon>`, I did not use external libraries.

For the purpose of this exercise, I got the basic functionality working. However, I believe that components such as the `<Carousel/>` or functionalities such as data fetching could (and, depending on the scenario, probably should) rely on the open source libraries out there. There are plenty of corner case scenarios and optimizations that would be already handled.

## Carousel responsiveness & optimization

Unfortunately I spent too much time trying to get a dynamic sized carousel responsive, with no "arrow jumping" or similar issues. I understand that the implemented code is far from optimal and should be improved upon, namely:

- There are small size misalignments between the actual rendered image size and the fetched image,
- The image aspect ratio is not always respected,
- We could fetch different image resolutions, depending on the device.

## Testing

I did not (yet) create unit tests due to the lack of time. Components were kept small, so unit testing will be rather straightforward.
I will happily implement some tests in the future, with some more free time.

## Time spent & final notes

I spent a little over 4 hours to finish the exercise.
I skipped some minor design details to speed up the implementation.
I am not yet completely happy with the result but, as of right now, time is up for me :)

I was forced to work on the exercise while juggling it with my professional work, so the context switching could have affected my efficiency. Either way, the exercise seemed too big to complete in 2-3 hours.

Taking into consideration the suggestion to not use third party libraries, the requirement of going through (even "diagonally") Imgix documentation and the plenty of details on the provided design, I think it was unrealistic to finish it in 2 hours.
