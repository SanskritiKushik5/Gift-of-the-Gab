import numpy as np
import pydub
from pydub import AudioSegment

a = np.fromstring(pydub.AudioSegment.from_mp3('E:/Projects/Gift-of-the-Gab/backend/media/card/audio/04-Track-04.mp3'))
print(a)